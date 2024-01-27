import React from 'react';

const Tooltip = ({ data = [], isHovered = false,  children }) => {
  const moreItems = data.slice(2);

  return (
    <div className="relative">
      {children}
      <div className={`flex flex-wrap bg-white border-2 border-solid text-white text-center p-1 rounded-md w-80 absolute z-10 right-2/4 ml-0 
            duration-75 ${isHovered ? 'visible' : 'invisible'} ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {(moreItems || []).map((itm) => {
          return(
            <div key={itm} class="flex items-center bg-blue-2 w-fit text-white rounded-md px-2 py-1 mr-1 mb-1">
              <span class="text-xs font-semibold uppercase">{itm}</span> 
              <span class="text-xs uppercase ml-2 cursor-pointer">x</span>
            </div>
        )})}
      </div>
    </div>
  );
};

export default Tooltip;
