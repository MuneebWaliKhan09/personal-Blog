import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navabar/Navbar'
import Footer from '@/components/footer/Footer'
import Providers from './providers'
import AuthProvider from './context/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muneeb Bloging site',
  description: 'This is a blogging site for Muneeb',
}

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </head>
      <AuthProvider>

        <body className='h-full '>
          <div className='top-0 sticky z-[1000]'>
            <Navbar />
          </div>

          <Providers>
            {children}
          </Providers>

          <div className='bg-gray-100'>
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  )
}
