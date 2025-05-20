import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Gallery'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
