import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MENU',
  description: 'MENU'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
