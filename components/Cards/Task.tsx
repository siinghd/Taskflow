'use client'

import React from 'react';
import { Badge } from '../ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import FileInput from '../Inputs/FileInput';
import { Button } from '../ui/button';

interface TaskProps {
  number: string;
  page: string;
  section?: string;
  type: string;
  completed: boolean;
  texts: any;
  images: any;
}

const Task: React.FC<TaskProps> = ({
  number,
  completed,
  page,
  section,
  type,
  texts,
  images,
}) => {
    console.log(type, texts)
  return (
    <div className="w-full border-[1px] border-dark rounded-md px-2 md:px-4 flex justify-between gap-2">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-1">
              <div className="relative shrink-0 w-[32px] h-[32px] rounded-full bg-dark text-white flex center sm-title leading-none select-none">
                {number}
                <div
                  className={`${completed ? 'bg-[#8be189]' : 'bg-[#FE91A4]'} absolute top-[-2px] right-[-1px] aspect-square w-[12px] rounded-full flex center`}
                >
                  <div
                    className={`${completed ? 'bg-[#40ce3d]' : 'bg-[#CE3D57]'} w-[8px] aspect-square rounded-full`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 text-left md:flex-row">
                <h3 className="leading-none font-bold font-title text-[20px] md:text-[30px]">
                  {page}
                  <span className="ml-1">-</span>
                </h3>
                <h3 className="leading-none font-bold font-title text-[20px] md:text-[30px]">{section}</h3>
              </div>
            </div>
            <Badge>{type}</Badge>
          </AccordionTrigger>
          <AccordionContent>
            <div className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2'>
                {Object.keys(texts).map((textKey) => {
                    const text = texts[textKey];
                    return (
                        <FileInput
                            key={textKey}
                            title={text?.title}
                            characters={text?.characters}
                            type="text"
                        />
                    );
                })}
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2'>
                {Object.keys(images).map((imageKey) => {
                    const image = images[imageKey];
                    return (
                        <FileInput
                            key={imageKey}
                            title={image?.title}
                            size_mb={image?.size_mb}
                            dimension_x={image?.dimension_x}
                            dimension_y={image?.dimension_y}
                            file={image?.file}
                            type="img"
                        />
                    );
                })}
            </div>
            <div className='flex justify-end'>
                <Button onClick={() => {alert('saving')}}>Save</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Task;
