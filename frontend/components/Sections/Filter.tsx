'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Checkbox } from "@/components/ui/checkbox"

interface FilterProps {
    placeholder: string;
    completed: string;
    missing: string;
}

const Filter: React.FC<FilterProps> = (props) => {
    const [filter, setFilter] = useState('')
  return (
    <div className='flex flex-wrap justify-center gap-4 select-none md:gap-8 md:justify-start'>
        <Input 
            id="filter" 
            value={filter} 
            className="max-w-[300px]"
            placeholder={props.placeholder}
            type='text'
            onChange={(e) => setFilter(e.target.value)} 
        />
        <div className='flex items-center space-x-1'>
            <Checkbox id="completed" />
            <label
                htmlFor="completed"
                className="leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {props.completed}
            </label>
            <div className='relative aspect-square w-[12px] rounded-full bg-[#8be189] flex center'>
                <div className='w-[8px] aspect-square bg-[#40ce3d] rounded-full' />
            </div>
        </div>
        <div className='flex items-center space-x-1'>
            <Checkbox id="missing" />
            <label
                htmlFor="missing"
                className="leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {props.missing}
            </label>
            <div className='relative aspect-square w-[12px] rounded-full bg-[#FE91A4] flex center'>
                <div className='w-[8px] aspect-square bg-[#CE3D57] rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Filter