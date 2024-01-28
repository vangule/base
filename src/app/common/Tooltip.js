import React, { useState, useEffect, useRef } from 'react';

const Tooltip = ({ data = [], isHovered = false,  children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const moreItems = data.slice(2);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleItemClick = (item) => {
    // Handle the click event on the tooltip content
    console.log(`Clicked on ${item}`);
  };
  const handleOutsideClick = (e) => {
    // Close the tooltip if clicked outside
    if (isVisible && tooltipRef.current && !tooltipRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add global event listener when the component mounts
    document.addEventListener('mousedown', handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isVisible]);

  return (
    <div className="relative" onClick={handleToggle}>
      {children}
      <div className={`flex flex-wrap bg-white border-2 border-solid text-white text-center p-1 rounded-md w-80 absolute z-10 right-2/4 ml-0 
            duration-75 ${isVisible ? 'visible' : 'invisible'} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            ref={tooltipRef}
            onClick={(e) => e.stopPropagation()}
        >
          <div className="tooltip-content">

        {(moreItems || []).map((itm) => {
          return(
            <div
            key={itm}
            class="flex items-center bg-blue-2 w-fit text-white rounded-md px-2 py-1 mr-1 mb-1"
            onClick={() => handleItemClick(itm)}
            >
              <span class="text-xs font-semibold uppercase">{itm}</span> 
              <span class="text-xs uppercase ml-2 cursor-pointer">x</span>
            </div>
        )})}
          </div>
      </div>
    </div>
  );
};

export default Tooltip;
