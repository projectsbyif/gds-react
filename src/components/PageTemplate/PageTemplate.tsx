import type { ReactNode } from 'react'
import { CookieBanner, type CookieBannerMessage } from '../CookieBanner/CookieBanner.js'
import { SkipLink } from '../SkipLink/SkipLink.js'
import { Header } from '../Header/Header.js'
import { ServiceNavigation, type ServiceNavigationItem } from '../ServiceNavigation/ServiceNavigation.js'
import { PhaseBanner } from '../PhaseBanner/PhaseBanner.js'
import { BackLink } from '../BackLink/BackLink.js'
import { Heading } from '../Heading/Heading.js'
import { Footer, type FooterProps } from '../Footer/Footer.js'

import '../../styles/objects.scss'

export interface PageTemplateProps {
  serviceName?: string
  serviceUrl?: string
  navigationItems?: ServiceNavigationItem[]
  cookieBanner?: {
    messages: CookieBannerMessage[]
    ariaLabel?: string
  }
  phase?: 'alpha' | 'beta'
  phaseContent?: ReactNode
  backLink?: {
    href: string
    text?: string
  }
  title?: string
  children?: ReactNode
  footer?: Omit<FooterProps, 'className' | 'containerClassName'>
}

export function PageTemplate({
  serviceName,
  serviceUrl = '/',
  navigationItems,
  cookieBanner,
  phase,
  phaseContent,
  backLink,
  title,
  children,
  footer,
}: PageTemplateProps) {
  const hasNavigation = navigationItems && navigationItems.length > 0

  return (
    <>
      {cookieBanner && (
        <CookieBanner
          serviceName={serviceName || 'this service'}
          messages={cookieBanner.messages}
          ariaLabel={cookieBanner.ariaLabel}
        />
      )}

      <SkipLink />

      {hasNavigation ? (
        <>
          <Header fullWidthBorder />
          <ServiceNavigation
            serviceName={serviceName}
            serviceUrl={serviceUrl}
            navigationItems={navigationItems}
          />
        </>
      ) : (
        <Header productName={serviceName} />
      )}

      <div className="govuk-width-container">
        {phase && phaseContent && (
          <PhaseBanner tag={phase}>{phaseContent}</PhaseBanner>
        )}

        {backLink && (
          <BackLink href={backLink.href}>{backLink.text || 'Back'}</BackLink>
        )}

        <main className="govuk-main-wrapper" id="main-content">
          {title && (
            <Heading level={1} size="xl">
              {title}
            </Heading>
          )}
          {children}
        </main>
      </div>

      <Footer {...footer} />
    </>
  )
}
