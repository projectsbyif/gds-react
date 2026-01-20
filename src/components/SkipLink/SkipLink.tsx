import { useEffect, type ReactNode } from "react";
import { Link } from "../Link/Link.js";

import "govuk-frontend/dist/govuk/components/skip-link/_skip-link.scss";

export interface SkipLinkProps {
  href?: string;
  children?: ReactNode;
  className?: string;
  /** When true, renders child element with merged props instead of an anchor */
  asChild?: boolean;
}

export function SkipLink({
  href = "#main-content",
  children = "Skip to main content",
  className = "",
  asChild = false,
}: SkipLinkProps) {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { SkipLink, createAll } = await import("govuk-frontend");
    createAll(SkipLink);
  };

  useEffect(() => {
    initialise();
  }, []);

  const skipLinkClass = `govuk-skip-link${className ? ` ${className}` : ""}`;

  return (
    <Link
      href={href}
      className={skipLinkClass}
      data-module="govuk-skip-link"
      asChild={asChild}
    >
      {children}
    </Link>
  );
}
