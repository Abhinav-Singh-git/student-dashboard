import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next-Gen Student Dashboard',
  description: 'Production high-performance analytical portfolio layer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark bg-zinc-950 text-zinc-50 antialiased selection:bg-violet-500/30">
      <body className={`${inter.className} flex min-h-screen flex-col md:flex-row bg-zinc-950`}>
        <Sidebar />
        <div className="flex-1 pb-24 md:pb-0 min-w-0">
          {children}
        </div>
      </body>
    </html>
  );
}