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
import "govuk-frontend/dist/govuk/govuk-frontend.min.css";

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
 * import { GDSReactProvider } from "@your-scope/your-library";
 *
 * function App() {
 *   return (
 *     <GDSReactProvider assetPath="/assets">
 *       <YourApplication />
 *     </GDSReactProvider>
 *   );
 * }
 * ```
 *
 * @remarks
 * You must copy GOV.UK Frontend assets to your application:
 * ```bash
 * cp -r node_modules/govuk-frontend/dist/govuk/assets ./public/assets
 * ```
 */
export function GDSReactProvider({
  children,
  assetPath = "/assets",
  autoInit = true,
  scope,
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

  // Set CSS custom property for asset path (useful for custom styling)
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.style.setProperty("--gds-asset-path", assetPath);
  }, [assetPath]);

  const contextValue: GDSReactConfig = {
    assetPath,
    isInitialised,
    reinitialise,
  };

  return (
    <GDSReactContext.Provider value={contextValue}>
      {children}
    </GDSReactContext.Provider>
  );
}
