import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service-Detail',
  description: 'service-Detail'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
