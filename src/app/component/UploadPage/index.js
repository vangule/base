'use client'

import React from 'react'
import baseLogo from '../../../../public/images/base-logo.svg';
import notificationImg from '../../../../public/images/notification.svg';
import profileImg from '../../../../public/images/profile.svg';
import Image from 'next/image';
import FileUploader from './FileUploader';
import UploadsDashboard from './UploadsDashboard';

const UploadPage = () => {
  return( 
    <div class="flex bg-off-white w-full h-screen">
        <div class="basis-1/4 bg-white pt-12 pl-12">
                <div class="flex items-center">
                    <Image src={baseLogo} alt="base logo" width={40} height={40} class="mr-4" />
                    <div class="text-black-2 text-2xl font-semibold">Base</div>
                </div>
            </div>
            <div class="basis-3/4 pt-10 px-10">
                <div class="flex justify-between items-center">
                    <div class="text-black-2 text-2xl font-semibold">Upload CSV</div>
                    <div class="flex items-center">
                        <Image src={notificationImg} alt="notification img" width={25} height={25} class="mr-6" />
                        <Image src={profileImg} alt="profile img" width={40} height={40} />
                    </div>
                </div>

                <FileUploader />
                <UploadsDashboard />
            </div>
    </div>
)};

export default UploadPage