import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BLOG',
  description: 'BLOG'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}