import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'], // Poppins SemiBold for headings
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'], // Inter Light and Regular for body
  variable: '--font-inter',
});

export const metadata = {
  title: 'Medhwan EduTech',
  description: 'AI-powered educational platform for students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 