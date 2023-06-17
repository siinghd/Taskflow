'use client'

import React, { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '../ui/badge';

interface FileInputProps {
  id: number;
  type: string;
  title: string;
  value: string | File | undefined;
  characters?: number;
  size_mb?: number;
  dimension_x?: number;
  dimension_y?: number;
  file?: string[];
  modifyTask?: (id: number, event: any) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  id,
  type,
  title,
  characters,
  size_mb,
  dimension_x,
  dimension_y,
  file,
  modifyTask,
}) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const selectedFile = fileList[0];
      const fileSize = selectedFile.size / 1024 / 1024; // Size in MB
      const fileExtension: any = selectedFile.name.split('.').pop()?.toLowerCase();

      // Perform file validation checks
      if (size_mb && fileSize > size_mb) {
        setError(`File size should be smaller than ${size_mb}MB.`);
        return;
      }

      if (file && file.length > 0 && !file.includes(fileExtension)) {
        setError(`Invalid file format. Supported formats are: ${file.join(', ')}`);
        return;
      }

      const image = new Image();
      image.src = URL.createObjectURL(selectedFile);
      image.onload = () => {
        if (dimension_x && dimension_y && (image.width !== dimension_x || image.height !== dimension_y)) {
          setError(`Image dimensions should be ${dimension_x}px x ${dimension_y}px.`);
          return;
        }

        setError(null);
        setSelectedFileName(selectedFile.name); // Set the selected file name
        // Perform additional actions with the selected file
        // e.g., store it in state or make an API call
      };
    }
  };

  let fileExtensions: string | undefined = '';

  if (file?.length === 1) {
    fileExtensions = file[0].toUpperCase();
  } else {
    fileExtensions = file?.map(extension => extension.toUpperCase()).join(' or ');
  }

  return (
    <div className='bg-dark/10 border-[1px] border-dark rounded-md px-2 md:px-4 py-3'>
      <div className='flex items-center justify-between'>
        <label className='sm-title' htmlFor={title}>
          {title}
        </label>
        {(characters || size_mb || dimension_x || dimension_y) && (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <div className='flex items-center gap-1 select-none'>
                  {characters && (
                    <div className='leading-none sm-title'>
                      <span className='text-dark/70'>0</span>/{characters}
                    </div>
                  )}
                  {size_mb && <Badge variant='outline'>{size_mb}MB</Badge>}
                  {dimension_x && dimension_y && (
                    <Badge variant='outline'>
                      {dimension_x}x{dimension_y}
                    </Badge>
                  )}
                  <i className='leading-none bi bi-info-circle-fill' />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {characters && `Please write up to ${characters} characters in the field`}
                  {(size_mb || dimension_x || dimension_y) && `Please upload an image ${(size_mb && size_mb !== undefined && size_mb > 0) ? `smaller than ${size_mb}MB, ` : ''} ${`of format ${fileExtensions},`} ${dimension_x && `wide ${dimension_x}px, `} ${dimension_y && `tall ${dimension_y}px`}`}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className='relative flex flex-col center'>
        {type === 'text' && (
          <textarea
            id={title}
            rows={2}
            placeholder='Write something'
            className='w-full mt-2 bg-transparent placeholder:text-dark/50 text'
          />
        )}
        {type === 'img' && (
          <>
            <input
              type='file'
              id={title}
              className={`${file && ''} bg-dark w-full min-h-[40px] h-full mt-2 absolute top-0 left-0 opacity-0 cursor-pointer`}
              onChange={handleFileChange}
            />
            <i className='bi bi-cloud-arrow-up text-[40px] leading-none my-2' />
            <p className='max-w-[380px] text text-dark/50 text-center leading-tight'>
              {`Click to upload or drag and drop a ${fileExtensions} file, ${
                size_mb && `smaller than ${size_mb}MB, `
              } ${dimension_x && `wide ${dimension_x}px, `} ${dimension_y && `tall ${dimension_y}px`}`}
            </p>
            {selectedFileName && <p className='mt-2 text-dark sm-title'>{selectedFileName}</p>}
            {error && <p className='text-red-500'>{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default FileInput;