import { HEADER_ELEMENTS } from '@/app/constants';
import useSampleData from '@/app/hooks/useSampleData'
import React from 'react'

const UploadsDashboard = () => {
    const data = useSampleData();

    console.log(data, 'dataw');

    const sortFirstFiveElement = (data || []).slice(0, 5);

    console.log(sortFirstFiveElement, 'sortFirstFiveElement');

  return (
    <div>
        <div class="font-semibold text-2xl mb-8">Uploads</div>
        <div class="bg-white-2 px-4 pt-4 pb-2 mb-4 rounded-lg">
            <div class="flex justify-between px-4 pb-2 w-full">
                {(HEADER_ELEMENTS || []).map((item) => {
                    return <div key={item} class="font-semibold w-1/5">{item}</div>
                })}
            </div>
                {(sortFirstFiveElement || []).map((item, index) => {
                    const { links = '', prefix = '', select_tags = [], selected_tags = [] } = item || {};
                    console.log(item, 'item');
                    return(
                    <div key={item?.id} class="flex justify-between bg-white py-4 px-4 rounded-md mb-4 w-full">
                        <div class="w-1/5">{index + 1}</div>
                        <div class="w-1/5 underline cursor-pointer text-blue-1">{links}</div>
                        <div class="w-1/5">{prefix}</div>
                        <div class="w-1/5">{select_tags?.[0]}</div>
                        <div class="w-1/5">{selected_tags?.[0]}</div>
                    </div>
                    )
                })}
               
        </div>
    </div>
  )
}

export default UploadsDashboard