import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lama Dev School Management Dashboard',
  description: 'Next.js School Management System',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[16%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">AshikSchool</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
