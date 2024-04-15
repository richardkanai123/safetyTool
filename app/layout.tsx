import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_Components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Incide..',
  description: 'Incidencts Tracking and Reporting Tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // bg-gray-200
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="w-full flex flex-col items-center mx-auto max-w-screen-3xl mx-auto">
          <Header />
          <main className="min-h-screen  w-full flex flex-col  items-center justify-between">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
