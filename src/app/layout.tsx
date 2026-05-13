import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AutoTopía | Tu próximo auto está aquí',
  description: 'Concesionaria de autos nuevos y seminuevos en México. Toyota, Honda, Mazda, Nissan, Volkswagen, Hyundai. Financiamiento disponible.',
  icons: {
    icon: '🚗',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#0a0a14', color: 'white' }}>
        <Navbar />
        <main style={{ paddingTop: '70px', minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}