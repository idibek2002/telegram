'use client'
import '@mantine/core/styles.css';
import { Inter } from 'next/font/google'
import './globals.css'
import { MantineProvider } from '@mantine/core'
import { CollapseDesktop } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <body className={inter.className}>
            <MantineProvider>
              <CollapseDesktop>
                  {children}
              </CollapseDesktop>
            </MantineProvider>
        </body>
      </head>
    </html>
  )
}