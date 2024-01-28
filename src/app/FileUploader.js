import React, { useState } from 'react'
import uploadIcon from '../../public/images/upload-icon.svg';
import excelSheetIcon from '../../public/images/excel-logo.svg';
import Image from 'next/image';

const FileUploader = () => {
  const [fileName, setFileName] = useState({ name : ''});

  const { name : fileUrl = '' } = fileName || {};

  const handleDrop = (event) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;
      setFileName('');

      if (!fileName) {
          setFileName(droppedFiles?.[0])
      }else{
          setFileName('');
      }
    };

  return (
    <div class="flex justify-center mt-24 mb-20 w-full">
        <div className='flex flex-col bg-white sm:w-6/12 w-full rounded-md px-4 py-4'>
        {fileUrl ? 
            <div class="flex flex-col items-center border-dotted border-2 rounded-md border-grey-1 px-16 py-24">
                <Image src={excelSheetIcon} width={50} height={50} alt='excel' class="mb-1" />
                <div class="flex justify-center text-gray-2 mb-2">{fileUrl}</div>
                <div class="text-red-1 cursor-pointer" onClick={() => setFileName('')}>Remove</div>
            </div>:
            <label for="input-file" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
                <div class="flex flex-col justify-center items-center border-dotted border-2 rounded-md border-grey-1 px-16 py-24">
                    <Image src={excelSheetIcon} width={50} height={50} alt='excel' class="mb-3" />
                    <div> 
                      Drop your excel sheet here or 
                      <span class="text-blue-2 cursor-pointer ml-1">browse</span>
                    </div>
                </div>
                <input
                    type="file"
                    class="custom-file-input"
                    id="input-file"
                    hidden 
                    onChange={({ target: { files }})=> {
                        files[0] && setFileName(files[0]);
                    }}
                />
            </label>}
            <div class={`flex mt-4 bg-blue-2 py-3 rounded-lg text-white items-center justify-center
              ${fileUrl ? 'pointer' : 'cursor-not-allowed'} ${fileUrl ? 'opacity-100' : 'opacity-40' }`} role='button'>
                <Image src={uploadIcon} alt="upload icon" width={20} height={20} class="mr-4" />
                <div class="text-sm font-semibold">Upload</div>
            </div>
        </div>
    </div>
  )
}

export default FileUploader