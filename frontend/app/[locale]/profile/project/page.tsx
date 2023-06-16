import Link from 'next/link'
import React from 'react'
import {useTranslations} from 'next-intl';
import ProjectSection from '@/components/Sections/ProjectSection';

const NewProject = () => {
    const t = useTranslations('NewProject');
  return (
    <main className="mt-[100px] container">
        <Link href='/profile' className='flex items-center gap-2 mb-6'>
            <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M0.371019 1.82966L1.87984 0.320847L10.9327 9.37375L10.9327 1.07526L13.0753 1.07526V13.0251H1.12543L1.12543 10.8826L9.42392 10.8826L0.371019 1.82966Z" fill="#665B5B"/>
            </svg>
            <p className='leading-none text'>Back to all projects</p>
        </Link>
        <ProjectSection 
            newProject={true}
            text1={t('there-are-currently')}
            text2={t('fields')}
        />
    </main>
  )
}

export default NewProject