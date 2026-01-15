import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { GDSReactConfig, GDSReactProviderProps } from "./types.js";

// Import GOV.UK Frontend styles
// @ts-ignore: Ignore missing types for govuk-frontend
import 'govuk-frontend/dist/govuk/index.scss'

const GDSReactContext = createContext<GDSReactConfig | null>(null);

/**
 * Hook to access GDS React configuration and utilities.
 *
 * Must be used within a GDSReactProvider.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isInitialised, reinitialise } = useGDSReact();
 *
 *   // After dynamically adding GOV.UK components:
 *   useEffect(() => {
 *     reinitialise();
 *   }, [dynamicContent]);
 * }
 * ```
 */
export function useGDSReact(): GDSReactConfig {
  const context = useContext(GDSReactContext);

  if (!context) {
    throw new Error("useGDSReact must be used within a GDSReactProvider");
  }

  return context;
}

/**
 * Provider component that initialises GOV.UK Frontend for your application.
 *
 * Wrap your application (or the part that uses GOV.UK components) with this provider.
 *
 * @example
 * ```tsx
 * // In your app's root:
 * import { GDSReactProvider } from "@projectsbyif/gds-react";
 *
 * function App() {
 *   return (
 *     <GDSReactProvider>
 *       <YourApplication />
 *     </GDSReactProvider>
 *   );
 * }
 * ```
 *
 * @remarks
 * You must copy GOV.UK Frontend assets to your application for fonts and images to:
 * ```bash
 * cp -r node_modules/govuk-frontend/dist/govuk/assets ./public/assets
 * ```
 */
export function GDSReactProvider({
  children,
  autoInit = true,
  scope,
  linkComponent,
}: GDSReactProviderProps): ReactNode {
  const [isInitialised, setIsInitialised] = useState(false);
  const initRef = useRef(false);

  const initialise = useCallback(
    async (scopeElement?: HTMLElement | null) => {
      // Skip on server
      if (typeof window === "undefined") return;

      try {
        // Dynamic import to avoid SSR issues
        const { initAll } = await import("govuk-frontend");

        initAll({
          scope: scopeElement ?? document.body,
        });

        setIsInitialised(true);
      } catch (error) {
        console.error("Failed to initialise GOV.UK Frontend:", error);
      }
    },
    []
  );

  const reinitialise = useCallback(() => {
    initialise(scope);
  }, [initialise, scope]);

  // Initial setup
  useEffect(() => {
    // Prevent double-init in React Strict Mode
    if (initRef.current) return;

    if (autoInit) {
      initRef.current = true;
      initialise(scope);
    }
  }, [autoInit, initialise, scope]);

  const contextValue: GDSReactConfig = {
    isInitialised,
    reinitialise,
    linkComponent,
  };

  return (
    <GDSReactContext.Provider value={contextValue}>
      {children}
    </GDSReactContext.Provider>
  );
}
