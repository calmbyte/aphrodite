import type { Metadata } from 'next';
import { Inter, Noto_Sans } from 'next/font/google';
import './globals.css';
import Header from './ui/Header';

const inter = Inter({ subsets: ['latin'] });
const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CalmByte AI',
  description: 'Empower Your Events with AI Assistance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
