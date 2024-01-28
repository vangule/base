'use client'

import Image from 'next/image'
import React from 'react'
import brandLogo from '../../../public/images/header-company-logo.svg';
import blueBrandLogo from '../../../public/images/base-logo.svg';
import burgerMenu from '../../../public/images/burger-regular.svg';
import profileIcon from '../../../public/images/notification.svg';
import notificationIcon from '../../../public/images/profile.svg';
import crossIcon from '../../../public/images/cross-icon.svg';
import { usePathname } from 'next/navigation';

const Header = ({ menuOpened = false, setMenuOpened = () => {} }) => {
    const pathname = usePathname();

    const isSignupPage = pathname === '/';
    const toggleBrandLogo = menuOpened ? blueBrandLogo : brandLogo;

  return (
    <div class={`sm:hidden flex justify-between items-center px-6 py-4 ${menuOpened ? 'bg-white' : 'bg-blue-2'}`}>
       <div class="flex items-center">
        {!isSignupPage && !menuOpened ? 
            <Image
                src={burgerMenu} alt='burger menu' width={20} height={20} class="mr-4" 
                onClick={() => setMenuOpened(!menuOpened)}
            /> : null}

            <Image src={toggleBrandLogo} alt="brand logo" width={35} height={35} />
            <div class={`ml-4 text-xl font-semibold ${menuOpened ? 'text-black-2' : 'text-white'}`}>Base</div>
       </div>
      {!isSignupPage ? <div class="flex items-center">
        {menuOpened ? 
            <Image src={crossIcon} width={40} height={40} alt="cross img" class="cursor-pointer" onClick={() => setMenuOpened(false)} />:
            <>
                <Image src={profileIcon} alt="profile logo" width={20} height={20} />
                <Image src={notificationIcon} alt="notification logo" width={30} height={30} class="ml-4"/>
            </> }
       </div>: null}
    </div>
  )
}

export default Header