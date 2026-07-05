import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FloatingPhone from '@/components/FloatingPhone';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'La Brigade Mobile | Réparation de Téléphones, Tablettes & Mac',
  description: "Besoin d'une réparation express ? La Brigade Mobile répare votre téléphone, tablette ou Mac (écran, batterie, connecteur). Pièces premium, garanti 3 mois, devis gratuit. iPhone, Samsung, iPad et plus.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  openGraph: {
    title: 'La Brigade Mobile | Réparation Express',
    description: 'Réparation de smartphones, tablettes et ordinateurs. Pièces premium, garanti 3 mois, devis gratuit.',
    url: 'https://labrigademobile.fr',
    siteName: 'La Brigade Mobile',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingPhone />
      </body>
    </html>
  );
}
