import './globals.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-purple/theme.css'
import 'primeicons/primeicons.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
export const metadata = {
  title: 'H2Home',
  description: 'AI enabled water well predictor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body>
        <Header />
        <main className='mt-16 max-md:mt-0'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
