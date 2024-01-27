import { HEADER_ELEMENTS } from '@/app/constants/uploads-config';
import useSampleData from '@/app/hooks/useSampleData'
import React, { useState } from 'react'
import Dropdown from './common/Dropdown';
import Tooltip from './common/Tooltip';

const MoreTags = ({ data = [] }) => {
    const [isHovered, setIsHovered] = useState(false);

    const initialTwoItems = data?.slice(0, 2);

    return(
        <div class="flex items-center">
            {(initialTwoItems || []).map((itm) => {
            return(
                <div key={itm} class="flex items-center bg-blue-2 w-fit text-white rounded-md px-2 py-1 mr-1 mb-1">
                    <span class="text-xs font-semibold uppercase">{itm}</span> 
                    <span class="text-xs uppercase ml-2 cursor-pointer">x</span>
                </div>
                )})}

            <Tooltip data={data} isHovered={isHovered}>
                <div 
                    class="cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    +{data?.length - 2}
                </div>
            </Tooltip>
        </div>
    )
}

const UploadsDashboard = () => {
    const data = useSampleData();
    const sortFirstFiveElement = (data || []).slice(0, 5);

  return (
    <div class="mx-6">
        <div class="font-semibold text-2xl mb-8">Uploads</div>
        <div class="bg-white-2 px-4 pt-4 pb-2 mb-4 rounded-lg">
            <div class="flex justify-between px-4 pb-2 w-full">
                {(HEADER_ELEMENTS || []).map((item) => {
                    return <div key={item} class="font-semibold w-1/5">{item}</div>
                })}
            </div>
                {(sortFirstFiveElement || []).map((item, index) => {
                    const { links = '', prefix = '', select_tags = [], selected_tags = [] } = item || {};

                    const isProtocolPresent = links.includes('http://www.');
                    const redirectionLink = isProtocolPresent ? links : `http://www.${links}`;

                    return(
                    <div key={item?.id} class="flex justify-between bg-white py-4 px-4 rounded-md mb-4 w-full h-16">
                        <div class="w-1/5">{index > 9 ? '' : '0'}{index + 1}</div>
                        <div class="w-1/5 underline cursor-pointer text-blue-1">
                        <a href={redirectionLink} target="_blank">{links}</a>
                        </div>
                        <div class="w-1/5">{prefix}</div>
                        <div class="w-1/5">
                            <Dropdown data={select_tags} />
                        </div>
                        <div class="flex flex-wrap w-1/5">
                            {selected_tags.length > 2 ? 
                            <MoreTags data={selected_tags} /> :
                            (selected_tags || []).map((tag) => {
                                return (
                                    <div key={tag} class="flex items-center bg-blue-2 w-fit text-white rounded-md px-2 py-1 mr-1 mb-1">
                                        <span class="text-xs font-semibold uppercase">{tag}</span> 
                                        <span class="text-xs uppercase ml-2 cursor-pointer" >x</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    )
                })}
        </div>
    </div>
  )
}

export default UploadsDashboard