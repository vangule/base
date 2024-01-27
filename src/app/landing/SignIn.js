'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import googleLogo from '../../../public/images/google-logo.svg';
import appleLogo from '../../../public/images/apple-logo.svg';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';

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
  };

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
        <div class="text-sm mt-8 flex items-center justify-center text-base text-off-gray">
          Don’t have an account? 
          <span class="text-blue-1 ml-2 cursor-pointer">Register here</span>
        </div>
      </div>

    </div>
  )
}

export default SignIn 