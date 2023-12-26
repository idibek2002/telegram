'use client'
import '@mantine/core/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppShell, Collapse, MantineProvider } from '@mantine/core'
import { CollapseDesktop } from '@/components/sidebar'
import Navbar from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telegram App',
  description: 'Telegram app',
}


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