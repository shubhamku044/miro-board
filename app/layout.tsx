import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConvexClientProvider } from '@/providers/convex-client-provider';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miro board',
  description: 'Miro board',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster duration={3000} />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
