import { HEADER_ELEMENTS } from '@/app/constants/uploads-config';
import useSampleData from '@/app/hooks/useSampleData'
import Tagging from './Tagging';

const UploadsDashboard = () => {
    const data = useSampleData();
    const sortFirstFiveElement = (data || []).slice(0, 5);

  return (
    <div class="mx-1 sm:mx-6">
        <div class="font-semibold text-2xl mb-8">Uploads</div>
        <div class="bg-white-2 px-4 pt-4 pb-2 mb-4 rounded-lg overflow-x-scroll">
            <div class="flex justify-between px-4 pb-2 w-96 sm:w-full">
                {(HEADER_ELEMENTS || []).map((item) => {
                    return <div key={item} class="text-xs sm:text-base font-semibold w-1/5">{item}</div>
                })}
            </div>
            {(sortFirstFiveElement || []).map((item, index) => {
                    const { links = '', prefix = '', select_tags = [], selected_tags = [] } = item || {};

                    const isProtocolPresent = links.includes('http://www.');
                    const redirectionLink = isProtocolPresent ? links : `http://www.${links}`;

                    return(
                    <div key={item?.id} class="flex justify-between bg-white py-4 px-4 rounded-md mb-4 w-96 sm:w-full h-16">
                        <div class="w-1/5 text-xs sm:text-base">
                            {index > 9 ? '' : '0'}{index + 1}
                        </div>
                        <div class="w-1/5 text-xs sm:text-base underline cursor-pointer text-blue-1 truncate">
                            <a href={redirectionLink} target="_blank" class="text-xs sm:text-base">{links}</a>
                        </div>
                        <div class="w-1/5 text-xs sm:text-base">
                            {prefix}
                        </div>
                        <Tagging selectedTags={selected_tags} selectTags={select_tags} />
                    </div>
                    )
            })}
        </div>
    </div>
  )
};

export default UploadsDashboard