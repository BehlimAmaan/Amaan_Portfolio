import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import SiteBackground from '@/components/SiteBackground'
import { siteConfig } from '@/data/site'

import '@/styles/globals.css'

export const metadata = {
  title: {
    template: `%s - ${siteConfig.name}`,
    default: `${siteConfig.name} - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <SiteBackground />
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
