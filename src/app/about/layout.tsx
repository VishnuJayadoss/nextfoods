import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}