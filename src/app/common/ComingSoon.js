import Image from 'next/image'
import React from 'react'
import comingSoon from '../../../public/images/coming-soon.webp';

const ComingSoon = ({ heading = '' }) => {
  return (
    <>
        <div class="text-2xl font-semibold capitalize">{heading}</div>
        <div class='flex flex-col justify-center items-center'>
            <Image src={comingSoon} alt="coming soon img" width={600} height={600} />
            <div class='font-semibold text-off-gray text-xl text-center'>We are working on something exciting</div>
            <div class='font-semibold text-off-gray text-xl'>Stay Tuned!</div>
        </div>
    </>
  )
}

export default ComingSoon;