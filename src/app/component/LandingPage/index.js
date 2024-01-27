import Image from 'next/image';
import React from 'react';
import backgroundImage from "../../../../public/images/left-side-bg.svg";
import githubLogo from '../../../../public/images/github-logo.svg';
import twitterLogo from '../../../../public/images/twitter.svg';
import linkdinLogo from '../../../../public/images/linkedin.svg';
import discordLogo from '../../../../public/images/discord.svg';
import brandLogo from '../../../../public/images/brand-layer.svg';
import SignIn from './SignIn';

const LandingPage = () => {
  return (
    <div class="flex bg-off-white">
      <div 
        class="basis-1/2 flex flex-col justify-between pt-16 pb-16"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height:'100vh'
        }}
        >
          <div style={{ width:'70px', height:'70px', background :'#fff', borderRadius:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'50px'}}>
            <Image
              src={brandLogo}
              alt="logo"
              width={70}
              height={70}
            />
          </div>

        <div class="text-6xl font-bold text-white ml-60">BASE</div>

        <div class="flex align-center">
          <Image src={githubLogo} width={50} height={50} alt='github logo' class="mr-10 ml-40" />
          <Image src={twitterLogo} width={50} height={50} alt='twitter logo' class="mr-10" />
          <Image src={linkdinLogo} width={50} height={50} alt='linkdin logo' class="mr-10" />
          <Image src={discordLogo} width={50} height={50} alt='discord logo' class="mr-10" />
        </div>
    </div>
    
    <SignIn />
  </div>
  )
}

export default LandingPage;