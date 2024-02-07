import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, Inter } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Coffee Connoisseur',
  description: 'Discover your local coffee shops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable}`}>
        {children}
        <footer className="mt-auto bg-violet-900 py-6 text-lg text-white">
          <div className="text-center">By Ankita Kulkarni</div>
        </footer>
      </body>
    </html>
  );
}
