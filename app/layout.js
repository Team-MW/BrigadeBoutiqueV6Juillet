import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'La Brigade Mobile | Réparation de Téléphones & Tablettes',
  description: 'Expert en réparation de smartphones, tablettes et ordinateurs. Service rapide, pièces de qualité et garantie. Demandez votre devis gratuit.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <FAQ />
        <Footer />
      </body>
    </html>
  );
}
