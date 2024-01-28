import React, { useState } from 'react'
import Tooltip from './common/Tooltip';

const MoreTags = ({ data = [], handleRemoveTag = () => {} }) => {
    const [isHovered, setIsHovered] = useState(false);

    const initialTwoItems = data?.slice(0, 2);

    return(
        <div class="flex items-center">
            {(initialTwoItems || []).map((itm) => {
            return(
                <div key={itm} onClick={() => handleRemoveTag(itm)} class="flex items-center bg-blue-2 w-fit text-white sm:rounded-md rounded sm:px-2 px-1 sm:py-1 py-0.5 mr-1 mb-1">
                    <span class="text-xs font-semibold sm:uppercase capitalize">{itm}</span> 
                    <span class="text-xs sm:uppercase capitalize ml-2 cursor-pointer">x</span>
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
};

const Tags = ({ newTags, setNewTags }) => {

    const handleRemoveTag = (item) => {
        console.log(newTags, item, 'newTagsinside');
       const sortedTags = newTags.filter((itm) => itm !== item);
       console.log(sortedTags, 'sortedTags');
       setNewTags(sortedTags);
    };

  return (
    <div class="flex flex-wrap w-1/5">
        {newTags.length > 2 ? 
            <MoreTags data={newTags} handleRemoveTag={handleRemoveTag} /> :
            (newTags || []).map((tag, index) => {
                return (
                    <div key={index} class="flex items-center bg-blue-2 w-fit text-white sm:rounded-md sm:px-2 px-0.5 py-0.5 rounded sm:py-1 mr-1 mb-1">
                        <span class="text-xs font-semibold sm:uppercase capitalize">{tag}</span> 
                        <span class="text-xs sm:uppercase capitalize ml-2 cursor-pointer" role="presentation" onClick={() => handleRemoveTag(tag)}>x</span>
                    </div>
                )
            })}
    </div>
  )
}

export default Tags