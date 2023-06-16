'use client'

import React, { useCallback, useState } from 'react';
import { Badge } from '../ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import FileInput from '../Inputs/FileInput';
import { TaskImage, TaskText } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Toggle } from "@/components/ui/toggle"

interface TaskProps {
  id: number;
  number: string;
  page: string;
  section?: string;
  type: string;
  completed: boolean;
  texts: any;
  images: any;
  isEditing?: boolean;
}

const Task: React.FC<TaskProps> = ({
  id,
  number,
  completed,
  page,
  section,
  type,
  texts,
  images,
  isEditing,
}) => {
  const [stateTexts, setStateTexts] = useState(()=>texts)
  const modifyTask = useCallback((id:number, event: any) => {
    setStateTexts((prev:TaskText[]) => {
      const textsNew = prev.slice()
      const index: number = textsNew.findIndex((v:TaskText) => {v.id === id})
      if(index === -1) return prev;
      const modifiedText:TaskText = {...textsNew[index], value:event.target.value};
      textsNew[index] = modifiedText;
      return textsNew;

    })
  },[])

  return (
    <div className="w-full border-[1px] border-dark rounded-md px-2 md:px-4 flex justify-between gap-2">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-1">
              <div className="relative shrink-0 w-[32px] h-[32px] rounded-full bg-dark text-white flex center sm-title leading-none select-none">
                {number}
                <div
                  className={`${completed ? 'bg-[#8be189]' : 'bg-[#FE91A4]'} absolute top-[-2px] right-[-1px] aspect-square w-[12px] h-[12px] rounded-full flex center`}
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
                {stateTexts.map((text:TaskText) => {
                    return (
                        <FileInput
                            key={text.id}
                            id={text.id}
                            title={text.title}
                            value={text.value}
                            characters={text?.characters}
                            type="text"
                            modifyTask={modifyTask}
                        />
                    );
                })}
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2'>
                {images.map((image:TaskImage) => {
                    return (
                        <FileInput
                            key={image.id}
                            id={image.id}
                            title={image?.title}
                            value={image?.value}
                            size_mb={image?.size_mb}
                            dimension_x={image?.dimension_x}
                            dimension_y={image?.dimension_y}
                            file={image?.file}
                            type="img"
                        />
                    );
                })}
            </div>
            {isEditing && (
              <div className='flex center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className='flex center w-[60px] h-[60px] rounded-full bg-dark/10 hover:bg-dark/20 border-[1px] border-dark cursor-pointer transition'>
                      <i className="bi bi-plus-lg text-[30px]"></i>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-full">
                    <DialogHeader>
                      <DialogTitle>Add section</DialogTitle>
                      <DialogDescription>
                        Choose which type is going to be the field
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="text" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="text">Text</TabsTrigger>
                        <TabsTrigger value="image">Image</TabsTrigger>
                      </TabsList>
                      <TabsContent value="text">
                        <Card className='border-0'>
                          <CardContent className="p-0 space-y-2">
                            <div className="space-y-1">
                              <Label htmlFor="title">Title (required)</Label>
                              <Input 
                                id="title" 
                                required
                                type='text'
                                placeholder='Write the title'
                                value=""
                                onChange={() => {}} 
                              />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="characters">Characters</Label>
                              <Input 
                                id="characters" 
                                type='number'
                                min={0}
                                placeholder='Number of characters'
                                value=""
                                onChange={() => {}} 
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="image">
                        <Card className='border-0'>
                          <CardContent className="p-0 space-y-2">
                            <div className="space-y-1">
                              <Label htmlFor="title">Title (required)</Label>
                              <Input 
                                id="title" 
                                required
                                type="text"
                                placeholder='Write the title'
                                value=""
                                onChange={() => {}} 
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className='space-y-1'>
                                <Label htmlFor="size">Size in MB</Label>
                                <Input 
                                  id="size" 
                                  type="number"
                                  min={0}
                                  placeholder='Max file size'
                                  value=""
                                  onChange={() => {}} 
                                />
                              </div>
                              <div className='space-y-1'>
                                <Label htmlFor="file">File format</Label>
                                <div className='flex flex-wrap items-center gap-1'>
                                  <Toggle variant='outline' aria-label="Toggle italic">
                                    PNG
                                  </Toggle>
                                  <Toggle variant='outline' aria-label="Toggle italic">
                                    JPG
                                  </Toggle>
                                  <Toggle variant='outline' aria-label="Toggle italic">
                                    WEBP
                                  </Toggle>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className='space-y-1'>
                                <Label htmlFor="width">Image width</Label>
                                <Input 
                                  id="width" 
                                  type="number"
                                  min={0}
                                  placeholder='Width of the image in px'
                                  value=""
                                  onChange={() => {}} 
                                />
                              </div>
                              <div className='space-y-1'>
                                <Label htmlFor="height">Image height</Label>
                                <Input 
                                  id="height" 
                                  type="number"
                                  min={0}
                                  placeholder='Height of the image in px'
                                  value=""
                                  onChange={() => {}} 
                                />
                              </div>
                            </div>
                          </CardContent>
                            
                        </Card>
                      </TabsContent>
                    </Tabs>
                    <DialogFooter>
                      <Button
                        type='submit' 
                        size='sm' 
                        variant='outline' 
                        className='!text-[18px] leading-none'
                      >
                        Add field
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )}
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
