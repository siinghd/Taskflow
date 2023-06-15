import React from 'react'
import {useTranslations} from 'next-intl';
import TasksChart from '@/components/Charts/TasksChart';
import { Input } from '@/components/ui/input';
import Filter from '@/components/Sections/Filter';

const Profile = () => {
  const t = useTranslations('Profile');
  return (
    <main className="mt-[100px] container">
      <h1 className='w-full mb-8 leading-none text-center md:mb-12 big-title'>
          {t('welcome')},<br/>Algo Group
      </h1>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='flex items-center title whitespace-nowrap'>
          <span className='hidden md:block'>{t('you-filled-in')}</span>
          <span className='w-[50px] aspect-square rounded-[8px] bg-dark text-white mx-1 flex center leading-none'>3</span>
          <span>{t('out-of')}</span>
          <span className='w-[50px] aspect-square rounded-[8px] bg-dark text-white mx-1 flex center leading-none'>55</span>
          <span className='hidden md:block'>{t('fields-correctly')}</span>
        </h2>
        <div>
          <TasksChart total={27} done={2} />
        </div>
      </div>
      <Filter 
        placeholder={t('filter-title')}
        completed={t('completed')}
        missing={t('missing')}
      />
    </main>
  )
}

export default Profile