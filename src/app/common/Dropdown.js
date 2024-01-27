import Image from 'next/image';
import React, { useState } from 'react';
import downArrow from '../../../public/images/down-arrow.svg';

const Dropdown = ({ data = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div class="relative inline-block bg-white w-36">
      <div class="py-1 px-4 border border-solid border-gray-4 rounded-md cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div class="flex items-center justify-center">
            {selectedItem ? <div class="text-sm">{selectedItem}</div>:  <div class="text-sm">Select Tag</div>}
            <Image src={downArrow} alt="arrow" width={30} height={30} />
        </div>
      </div>
      {isOpen && (
        <div class="absolute left-0 mt-2 rounded-md max-h-56 overflow-y-auto w-full border border-solid border-gray-4 z-10 bg-white">
          {(data || []).map((item) => (
            <div
              key={item}
              class={`py-1 px-1 text-sm cursor-pointer my-2 mx-2 rounded-md ${selectedItem ===item ? 'bg-gray-4' : 'transparent'}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
