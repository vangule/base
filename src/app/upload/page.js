'use client'

import React from 'react'
import notificationImg from '../../../public/images/notification.svg';
import profileImg from '../../../public/images/profile.svg';
import Image from 'next/image';
import FileUploader from '../FileUploader';
import UploadsDashboard from '../UploadsDashboard';

const Upload = () => {
  return( 
    <>
        <div class="flex justify-between items-center">
            <div class="text-black-2 text-2xl font-semibold">
                Upload CSV
            </div>
            <div class="sm:flex items-center hidden">
                <Image src={notificationImg} alt="notification img" width={25} height={25} class="mr-6" />
                <Image src={profileImg} alt="profile img" width={40} height={40} />
            </div>
        </div>
        <FileUploader />
        <UploadsDashboard />
    </>
)};

export default Upload;