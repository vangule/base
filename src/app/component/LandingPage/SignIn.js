'use client'

import React from 'react'
import googleLogo from '../../../../public/images/google-logo.svg';
import appleLogo from '../../../../public/images/apple-logo.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit } = useForm({});

  return (
    <div class="basis-1/2 flex items-center ml-20">
      <div>
        <div class="text-4xl font-bold text-black leading-10 mb-2">Sign In</div>
        <div class="text-base font-normal text-black mb-4">Sign in to your account</div>
        <div class="flex">
          <div class="flex items-center bg-white py-1.5 px-12 rounded-md text-off-gray mr-12 text-xs cursor-pointer">
            <Image src={googleLogo} width={15} height={15} alt="apple logo" class="mr-2" />
            Google Sign In
          </div>
          <div class="flex items-center bg-white py-1.5 px-12 rounded-md text-off-gray text-xs cursor-pointer">
            <Image src={appleLogo} width={15} height={15} alt="apple logo" class="mr-2" />
            Apple Sign In
          </div>
        </div>
        <div class="bg-white py-8 px-8 mt-8 rounded-lg border-1 border-solid border-gray-1">
          <form onSubmit={handleSubmit((data) => { console.log(data)})}>
            <div class="mb-4">
              <div class="text-black text-base mb-2">Email address</div>
              <input {...register("email")} type='email' placeholder='Enter email id' class="bg-white-2 rounded-md px-2 py-2 w-full" />
            </div>
            <div class="mb-4">
              <div class="text-black text-base mb-2">Password</div>
              <input {...register("password")} type="password" placeholder='Enter password' class="bg-white-2 rounded-md px-2 py-2 w-full"  />
            </div>

            <div class="text-base text-blue-1 cursor-pointer mb-6">Forgot password?</div>

            <button type='submit' class="w-full h-11 bg-blue-2 text-white rounded-lg font-bold text-base">Sign In</button>
          </form>
        </div>
        <div class="text-sm mt-8 flex items-center justify-center text-base text-off-gray">
          Don’t have an account? 
          <span class="text-blue-1 ml-2">Register here</span>
        </div>
      </div>

    </div>
  )
}

export default SignIn 