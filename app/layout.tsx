import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '专利分析及价值挖掘系统',
  description: '专利分析及价值挖掘系统',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
