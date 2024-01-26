import React from 'react'
import googleLogo from '../../../../public/images/google-logo.svg';
import appleLogo from '../../../../public/images/apple-logo.svg';
import Image from 'next/image';

const SignIn = () => {
  return (
    <div class="basis-1/2 flex items-center">
      <div>
        <div class="text-4xl font-bold text-black leading-10 mb-2">Sign In</div>
        <div class="text-base font-normal text-black mb-4">Sign in to your account</div>
        <div class="flex">
          <div class="flex items-center bg-white py-1.5 px-6 rounded-md text-off-gray mr-10 text-xs cursor-pointer">
            <Image src={googleLogo} width={15} height={15} alt="apple logo" class="mr-2" />
            Google Sign In
          </div>
          <div class="flex items-center bg-white py-1.5 px-6 rounded-md text-off-gray mr-10 text-xs cursor-pointer">
            <Image src={appleLogo} width={15} height={15} alt="apple logo" class="mr-2" />
            Apple Sign In
          </div>
        </div>
        <form>
          <div>Email Address</div>
        </form>
      </div>
    </div>
  )
}

export default SignIn 