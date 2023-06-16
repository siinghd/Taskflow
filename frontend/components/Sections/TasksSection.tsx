'use client'

import React from 'react'
import Task from '../Cards/Task'

interface TasksSectionProps {
    tasks?: any;
  }

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => {
  return (
    <div className='flex flex-col gap-3 mb-8 md:mb-16'>
        {Object.keys(tasks).map((taskKey, index) => {
            const task = tasks[taskKey];
            const number = (index + 1).toString().padStart(2, '0');
            return (
                <Task
                    key={taskKey}
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