import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jay Clegg | Personal Website',
  description: 'My resume and personal interests',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <NavBar/>
        <main className="min-h-screen max-w-7xl mx-auto p-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
