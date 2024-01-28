'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Image from "next/image";
import baseLogo from '../../public/images/base-logo.svg';
import Header from "./common/Header";
import { useState } from "react";
import Topbar from "./common/TopBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [menuOpened, setMenuOpened] = useState(false);

  const pathname = usePathname();

  console.log(pathname, 'pathname2');
  
  return (
    <html lang="en">
      <head>
        <title>Base</title>
        <meta name='Base' content='Base' />
      </head>
      <body className={inter.className}>
        <Header
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        {pathname !== '/' ? 
          <div class="sm:flex bg-off-white w-full sm:h-screen">
          <div class="basis-1/5 bg-white sm:pt-12 pl-12">
                <div class="hidden sm:flex items-center">
                    <Image src={baseLogo} alt="base logo" width={40} height={40} class="mr-4" />
                    <div class="text-black-2 text-2xl font-semibold">Base</div>
                </div>
              <Navigation menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
            </div>
            <div class={`${menuOpened ? 'hidden' : 'flex flex-col'} w-full pt-10 px-10 overflow-y-auto`}>
              {children}
            </div>
          </div>
         : children}
        </body>
    </html>
  );
}
