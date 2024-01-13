import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import GlobalLayout from "./components/Layout/GlobalLayout";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Admin-UI-Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.bodyContent}`}>
          <GlobalLayout />
          {children}

      </body>
    </html>
  )
}