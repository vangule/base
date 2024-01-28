'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import googleLogo from '../../../public/images/google-logo.svg';
import appleLogo from '../../../public/images/apple-logo.svg';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import mGithubLogo from '../../../public/images/m-github.svg';
import mLinkdinLogo from '../../../public/images/m-linkdin.svg';
import mDiscordLogo from '../../../public/images/m-discord.svg';
import mtwitterLogo from '../../../public/images/m-twitter.svg';

const SignIn = () => {
  const router = useRouter();

  const { control, handleSubmit, formState : { errors } } = useForm({
    defaultValues : {
      email : '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    router.push('/upload');
    console.log(data, 'data');
  };

  return (
    <div class="sm:basis-1/2 sm:flex sm:items-center sm:ml-20 sm:ml-1 px-6">
      <div class="pt-6">
        <div class="text-base sm:text-4xl font-bold text-black sm:leading-10 sm:mb-2">Sign In</div>
        <div class="text-xs sm:text-base font-normal text-black mb-4 sm:mb-8">Sign in to your account</div>
        <div class="flex justify-between">
          <div class="flex items-center bg-white rounded-md text-off-gray text-xs cursor-pointer px-4 py-2 sm:px-8">
            <Image src={googleLogo} width={15} height={15} alt="apple logo" class="mr-2" />
            <span>Google Sign In</span>
          </div>
          <div class="flex items-center bg-white rounded-md text-off-gray text-xs cursor-pointer px-4 py-2 sm:px-8">
            <Image src={appleLogo} width={15} height={15} alt="apple logo" class="mr-2" />
            Apple Sign In
          </div>
        </div>
        <div class="bg-white py-8 px-8 mt-8 rounded-lg border-1 border-solid border-gray-1 sm:w-96">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-4">
              <div class="text-black text-base mb-2">Email address</div>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <>
                    <input {...field} placeholder='Enter email id' class="bg-white-2 rounded-md px-2 py-2 w-full"  />
                    {errors.email && <p class='text-red-1 mt-1'>{errors.email.message}</p>}
                  </>
                )}
              />
            </div>
            <div class="mb-4">
              <div class="text-black text-base mb-2">Password</div>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <>
                    <input type="password" {...field} placeholder='Enter password' class="bg-white-2 rounded-md px-2 py-2 w-full"  />
                    {errors.password && <p class='text-red-1 mt-1'>{errors.password.message}</p>}
                  </>
                )}
              />
            </div>

            <div class="text-base text-blue-1 cursor-pointer mb-6">Forgot password?</div>

            <button type='submit' class="w-full h-11 bg-blue-2 text-white rounded-lg font-bold text-base">Sign In</button>
          </form>
        </div>
        <div class="text-sm mt-8 flex flex-col sm:flex-row items-center justify-center text-base text-off-gray">
          Don’t have an account? 
          <div class="text-blue-1 ml-2 cursor-pointer">Register here</div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-8 sm:hidden">
        <Image src={mGithubLogo} width={39} height={39} alt="github logo" class="mr-4" />
        <Image src={mtwitterLogo} width={42} height={42} alt="twitter logo" class="mr-4" />
        <Image src={mLinkdinLogo} width={50} height={50} alt="linkdin logo" class="mr-4" />
        <Image src={mDiscordLogo} width={50} height={50} alt="discord logo" class="mr-4" />
      </div>
    </div>
  )
}

export default SignIn 