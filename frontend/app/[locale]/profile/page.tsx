import React from 'react'
import {useTranslations} from 'next-intl';
import TasksChart from '@/components/Charts/TasksChart';
import Filter from '@/components/Sections/Filter';
import TasksSection from '@/components/Sections/TasksSection';
import tasks from '../../../data/tasks'

const Profile = () => {
  const t = useTranslations('Profile');

  const completedTasksCount = tasks.filter(task => task.completed).length;
  const totalTasksCount = tasks.length;
  return (
    <main className="mt-[100px] container">
      <h1 className='w-full mb-8 leading-none text-center md:mb-12 big-title'>
          {t('welcome')},<br/>Algo Group
      </h1>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='flex items-center title whitespace-nowrap'>
          <span className='hidden md:block'>{t('you-filled-in')}</span>
          <span className='w-[50px] aspect-square rounded-[8px] bg-dark text-white mx-1 flex center leading-none select-none'>{completedTasksCount}</span>
          <span>{t('out-of')}</span>
          <span className='w-[50px] aspect-square rounded-[8px] bg-dark text-white mx-1 flex center leading-none select-none'>{totalTasksCount}</span>
          <span className='hidden md:block'>{t('fields-correctly')}</span>
        </h2>
        <div>
          <TasksChart total={totalTasksCount} done={completedTasksCount} />
        </div>
      </div>
      <div className='mb-8'>
        <Filter 
          placeholder={t('filter-title')}
          completed={t('completed')}
          missing={t('missing')}
        />
      </div>
      <TasksSection 
        tasks={tasks}
      />
    </main>
  )
}

export default Profile