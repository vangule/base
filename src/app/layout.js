'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Image from "next/image";
import baseLogo from '../../public/images/base-logo.svg';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <head>
        <title>Base</title>
        <meta name='Base' content='Base' />
      </head>
      <body className={inter.className}>
        {pathname !== '/' ? 
          <div class="flex bg-off-white w-full h-screen">
            <div class="basis-1/4 bg-white pt-12 pl-12">
                <div class="flex items-center">
                    <Image src={baseLogo} alt="base logo" width={40} height={40} class="mr-4" />
                    <div class="text-black-2 text-2xl font-semibold">Base</div>
                </div>
              <Navigation />
            </div>
            <div class="basis-3/4 pt-10 px-10">
              {children}
            </div>
          </div>
         : children}
        </body>
    </html>
  );
}
