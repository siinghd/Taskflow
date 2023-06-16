'use client'

import React from 'react'
import Task from '../Cards/Task'
import { TaskInterface } from '../../lib/utils'





interface TasksSectionProps {
  tasks: (TaskInterface)[],
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => {

  return (
    <div className='flex flex-col gap-3 mb-8 md:mb-16'>
        {tasks.map((task, index) => {
            const number = (index + 1).toString().padStart(2, '0');
            return (
              <Task
                key={task.id}
                id={task.id}
                number={number}
                completed={task.completed}
                page={task.page}
                section={task.section}
                type={task.type}
                texts={task.texts}
                images={task.images}
              />
            );
        })}
    </div>
  )
}

export default TasksSection