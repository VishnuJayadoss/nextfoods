import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BLOG-DEATAIL',
  description: 'BLOG-DEATAIL'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}