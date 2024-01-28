import React, { useState } from 'react'
import Image from 'next/image';
import { NAVS } from '@/app/constants/navigation-config';
import { useRouter, usePathname } from 'next/navigation';

const Navigation = ({ menuOpened = false, setMenuOpened = () => {} }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [,currentRoute] = pathname.split('/');

  const [activeTab, setActiveTab] = useState(currentRoute || '')

  const hanldeRedirection = (title) => {
    router.push(`/${title}`);
    setActiveTab(title);
    setMenuOpened(false);
  };

  return (
    <div class={`${!menuOpened && 'hidden'} sm:flex sm:flex-col mt-10 `}>
        {((NAVS || []).map((item) => {
            const { title = '', icon = '', key = '' } = item || {};

            const invoiceIcon = key === 'upload' ? 30 : 25;

            return (
                <div key={key} className='flex mb-8 cursor-pointer' role="presentation" onClick={() => hanldeRedirection(key)} >
                    <Image src={icon} alt="dashboard" width={invoiceIcon} height={invoiceIcon} class="mr-4" />
                    <div class={`text-base font-semibold capitalize ${activeTab === key ? 'text-blue-2' : 'text-gray-3'}`}>{title}</div>
                </div>
            )
        }))}
    </div>
  )
}

export default Navigation