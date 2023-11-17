import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navabar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muneeb Bloging site',
  description: 'This is a blogging site for Muneeb',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className='h-full dark:bg-slate-700'>
        <div className='top-0 sticky z-[1000]'>
          <Navbar />
        </div>
        {children}

        <div className='bg-gray-100'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
