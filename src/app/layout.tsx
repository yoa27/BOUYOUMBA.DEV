import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BOUYOUMBA S. Clark - Dev',
  description: 'Portfolio de BOUYOUMBA S. Clark, développeur front-end passionné par le basket-ball, la photo et la tech.',
  keywords: ['développeur front-end', 'React', 'Next.js', 'portfolio', 'basket-ball', 'photographie'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="!scrollbar-none">
      <body className={`${inter.className} !scrollbar-none`}>{children}</body>
    </html>
  );
} 