import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Advance Biotech - Leading Pharmaceutical Supplier in Pakistan',
  description: 'Advance Biotech is a trusted pharmaceutical supplier serving hospitals, clinics, and pharmacies across Pakistan since 2018. Quality assured medicines and healthcare solutions.',
  keywords: 'pharmaceutical supplier, medicines, healthcare, Pakistan, Islamabad, medical supplies, pharmacy, hospital supplies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <body className="font-sans">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}