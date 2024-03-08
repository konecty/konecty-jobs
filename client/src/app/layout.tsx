import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import './globals.css';
import { cn } from '@/ui/utils/cn';

export const metadata: Metadata = {
  description: '',
  title: 'konecty shoes'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'flex min-h-screen flex-col items-center bg-background',
          GeistSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
