import Image from 'next/image';
import React from 'react';
import backgroundImage from "../../../public/images/left-side-bg.svg";
import brandLogo from '../../../public/images/brand-layer.svg';
import SignIn from './SignIn';
import Link from 'next/link';
import { SOCIAL_HANDLES } from '@/app/constants/social-handles-config';

const LandingPage = () => {
  return (
    <div class="sm:flex bg-off-white">
      <div 
        class="basis-1/2 flex flex-col justify-between pt-16 pb-16 sm:flex hidden"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height:'100vh'
        }}
        >
          <div class="bg-white w-16 h-16 rounded-full flex justify-center items-center ml-12">
            <Image
              src={brandLogo}
              alt="logo"
              width={70}
              height={70}
            />
          </div>

        <div class="text-6xl font-bold text-white ml-60">BASE</div>

        <div class="flex align-center ml-44	">
          {(SOCIAL_HANDLES || []).map((itm) => {
            const { name = '', redirection_links = '#', icon = '' } = itm || {};
            return(
              <Link key={name} href={redirection_links} target="_blank" passHref>
                <Image src={icon} width={50} height={50} alt={`${name}_logo`} class="mr-10" />
              </Link>
            )})}
        </div>
    </div>

    <SignIn />
  </div>
  )
}

export default LandingPage;