'use client'

import React from 'react'
import Filter from '@/components/Sections/Filter';
import Project from '../Cards/Project';
import projects from '../../data/projects'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface AdminPageProps {
    user: {
      name: string;
      role: string;
    };
    welcome: string;
    placeholder: string;
    done: string;
    missing: string;
}

const AdminPage: React.FC<AdminPageProps> = ({
    user,
    welcome,
    placeholder,
    done,
    missing,
}) => {
    const router = useRouter()
  return (
    <div className='pt-6'>
        <h2 className='mb-6 text-center title md:text-left'>{welcome}, {user.name}</h2>
        <Filter 
            placeholder={placeholder}
            completed={done}
            missing={missing}
        />
        <div className='grid grid-cols-1 gap-3 mt-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {projects.map((project, index) => {
                return (
                    <Project 
                        key={index}
                        id={project.id}
                        title={project.title}
                        createdAt={project.createdAt}
                        lastModified={project.lastModified}
                        done={project.done}
                    />
                );
            })}
        </div>
        <div className='flex mt-8 center'>
            <Button 
                type='button'
                onClick={() => router.push('/profile/project')}
            >
                Create new
            </Button>
        </div>
    </div>
  )
}

export default AdminPage