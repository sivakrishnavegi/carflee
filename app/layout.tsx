import { Footer, Navbar } from '@/core/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Maniac',
  description: 'Welcome to BooksWorld.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar title='Carfly' />
        {children}
        <Footer />
        </body>
    </html>
  )
}
