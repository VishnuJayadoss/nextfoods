import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact-us',
  description: 'Contact-us'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}