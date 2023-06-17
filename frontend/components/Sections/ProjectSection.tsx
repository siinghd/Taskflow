'use client'

import React, { useRef, useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '../ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Task from '../Cards/Task';
import useOutsideClick from '@/hooks/useOutsideClick';

interface ProjectSectionProps {
    newProject: boolean;
    text1: string;
    text2: string;
    title?: string | undefined;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
    newProject,
    text1,
    text2,
    title
}) => {
    const [isEditing, setIsEditing] = useState(newProject === true ? true : false)
    const [tasksCount, setTasksCount] = useState(0);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const popoverRef = useRef<HTMLDivElement>(null);

    const addTask = () => {
        handleClose()
        setTasksCount(prevCount => prevCount + 1);
    };

    const handleClose = () => {
        setPopoverOpen(false)
    };    

    useOutsideClick(popoverRef, handleClose);
  return (
    <div>
        {isEditing ? (
            <div className='bg-dark/10 border-[1px] border-dark rounded-md px-2 md:px-4 py-3 max-w-[400px] mb-12'>
                <div className='flex items-center justify-between'>
                    <label className='sm-title' htmlFor='project-title'>Project Title:</label>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger>
                                <i className="leading-none bi bi-info-circle-fill"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>This is going to be the project title, for example the name of the client</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <textarea
                    id='project-title'
                    rows={1}
                    placeholder='Write something'
                    className='w-full mt-2 bg-transparent placeholder:text-dark/50 text'
                />
            </div>
        ) : (
            <p className='title'>{title}</p>
        )}
        
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
            <h2 className='flex items-center title whitespace-nowrap'>
                <span className='hidden md:block'>{text1}</span>
                <span className='w-[50px] aspect-square rounded-[8px] bg-dark text-white mx-1 flex center leading-none select-none'>{tasksCount}</span>
                <span>{text2}</span>
            </h2>
            <div>
                {isEditing ? (
                    <div className='flex items-center gap-3'>   
                        <Button variant='outline'>Cancel</Button>
                        <Button>Save</Button>
                    </div>
                ) : (
                    <>
                        <Button>Edit</Button>
                    </>
                )}
            </div>
        </div>

        <div className='flex flex-col gap-3 mt-8 md:mb-16 '>
            {Array.from({ length:tasksCount }, (_, index) => {
            const number = (index + 1).toString().padStart(2, '0');
                return(
                    <Task 
                        key={index}
                        id={index}
                        number={number}
                        completed={false}
                        page='Homepage'
                        section='Section below that'
                        type='text'
                        texts={[]}
                        images={[]}
                        isEditing={isEditing}
                    />
                )
            })}
        </div>

        <div className='flex mt-8 mb-12 center'>
            <Popover open={popoverOpen}>
                <PopoverTrigger asChild>
                    <Button onClick={() => setPopoverOpen((prev) => !prev)}>Add new</Button>
                </PopoverTrigger>
                <PopoverContent className="w-full md:min-w-[500px]" ref={popoverRef}>
                    <div className="grid gap-4"> 
                        <div className="space-y-2">
                            <h4 className="leading-none title">Add a new task</h4>
                            <p className="leading-tight text">
                                Set what you need to start
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid items-center grid-cols-3 gap-4">
                                <Label htmlFor="page">Page</Label>
                                <Input
                                    required
                                    id="page"
                                    autoFocus
                                    placeholder='Page name'
                                    value=""
                                    onChange={() => {}}
                                    className="h-8 col-span-2"
                                />
                            </div>
                            <div className="grid items-center grid-cols-3 gap-4">
                                <Label htmlFor="section">Section</Label>
                                <Input
                                    required
                                    id="section"
                                    placeholder='Describe the section'
                                    value=""
                                    onChange={() => {}}
                                    className="h-8 col-span-2"
                                />
                            </div>
                            <div className="grid items-center grid-cols-3 gap-4">
                                <Label htmlFor="type">Type</Label>
                                <Input
                                    required
                                    id="type"
                                    placeholder='Type of the task'
                                    value=""
                                    onChange={() => {}}
                                    className="h-8 col-span-2"
                                />
                            </div>
                            <div className='flex justify-end'>
                                <Button 
                                    type='submit' 
                                    size='sm' 
                                    variant='outline' 
                                    className='!text-[18px] leading-none'
                                    onClick={addTask}
                                >
                                    Proceed
                                </Button>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    </div>
  )
}

export default ProjectSection