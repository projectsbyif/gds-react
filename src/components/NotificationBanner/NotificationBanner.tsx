import { useEffect, type ReactNode } from "react";

import "govuk-frontend/dist/govuk/components/notification-banner/_notification-banner.scss";

export interface NotificationBannerProps {
  title?: string;
  type?: "neutral" | "success";
  heading?: string | ReactNode;
  children?: ReactNode;
  titleId?: string;
  className?: string;
}

export function NotificationBanner({
  title,
  type = "neutral",
  heading,
  children,
  titleId = "govuk-notification-banner-title",
  className = "",
}: NotificationBannerProps) {
  const initialise = async () => {
    // Dynamic import to avoid SSR issues
    const { NotificationBanner, createAll } = await import("govuk-frontend");
    createAll(NotificationBanner);
  };

  useEffect(() => {
    initialise();
  }, []);

  // Default titles based on type
  const defaultTitle = type === "success" ? "Success" : "Important";
  const bannerTitle = title || defaultTitle;

  // Role based on type
  const role = type === "success" ? "alert" : "region";

  // Build class names
  const successClass =
    type === "success" ? " govuk-notification-banner--success" : "";
  const bannerClass = `govuk-notification-banner${successClass}${
    className ? ` ${className}` : ""
  }`;

  return (
    <div
      className={bannerClass}
      role={role}
      aria-labelledby={titleId}
      data-module="govuk-notification-banner"
    >
      <div className="govuk-notification-banner__header">
        <h2 className="govuk-notification-banner__title" id={titleId}>
          {bannerTitle}
        </h2>
      </div>
      <div className="govuk-notification-banner__content">
        {heading &&
          (typeof heading === "string" ? (
            <p className="govuk-notification-banner__heading">{heading}</p>
          ) : (
            heading
          ))}
        {children}
      </div>
    </div>
  );
}
