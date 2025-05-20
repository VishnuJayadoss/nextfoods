import type { Metadata } from 'next'
import './globals.css'
import Header from './Header/page'
import Footer from './Footer/page'



export const metadata: Metadata = {
  title: 'The Minerva Foods',
  description: 'The Minerva Foods'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
     <body
        className="antialiased"
        style={{ fontFamily: '"Libre Baskerville", serif' }}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
