import React from 'react'

interface ProjectProps {
    id: number;
    title: string,
    createdAt: string,
    lastModified?: string | undefined,
    done: boolean,
}

const Project: React.FC<ProjectProps> = ({
    id,
    title,
    createdAt,
    lastModified,
    done
}) => {
  return (
    <div className='rounded-md border-[1px] border-dark bg-dark/10 px-4 pt-3 pb-12 cursor-pointer transition hover:bg-dark/20'>
        <div className='flex justify-between'>
            <h3 className='leading-tight title'>{title}</h3>
            <div
                className={`${done ? 'bg-[#8be189]' : 'bg-[#FE91A4]'} top-[-2px] shrink-0 right-[-1px] aspect-square w-[12px] h-[12px] rounded-full flex center`}
            >
                <div
                    className={`${done ? 'bg-[#40ce3d]' : 'bg-[#CE3D57]'} w-[8px] aspect-square rounded-full`}
                />
            </div>
        </div>
        <p className='leading-tight text-[15px]'>Created: {createdAt}</p>
        <p className='leading-tight text-[15px]'>Last modified: {lastModified}</p>
    </div>
  )
}

export default Project