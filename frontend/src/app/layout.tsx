import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "AirSehat",
  description: "Cek air dengan AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
            <body className={`
            ${poppins.className}
            min-h-screen flex flex-col 
            
            `
          }>
        <Header/>
        <main className="flex flex-1 flex-col bg-gray-200/50 ">
          {children}
        </main>
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}


