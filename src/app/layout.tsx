import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn, constructMetadata } from '@/lib/utils'
import NavBar from '@/components/NavBar'
import Provider from '@/components/Provider'
import { Toaster } from 'sonner'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = constructMetadata()


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className='relative min-h-screen flex flex-col'>
          <Provider>
            <NavBar />
            <div className='flex-grow flex-1'>
              {children}
            </div>
            <Footer />
          </Provider>
        </main>
        <Toaster position='top-center' richColors />
      </body>
    </html>
  )
}
