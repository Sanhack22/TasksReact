import React, { createContext, useContext } from 'react'
import './Tasks.css'
import { ItemTask } from '../ItemTask/ItemTask'
import { taskContext } from '../Context/Context'

export const Tasks = () => {
  const createTaskContext = useContext(taskContext)

  const CheckboxChange = (event, id) => {
    const { checked } = event.target;
    createTaskContext.setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, status: checked };
        }
        return task;
      });
    });
  };

  function renderTasks(tasks) {
    return tasks.map((task, index) => (
      <ItemTask
        key={index}
        onChange={(event) => CheckboxChange(event, task.id)}
        checked={task.status}
        name={task.name}
        description={task.description}
      />
    ));
  }

  function MostTasks(value) {
    if (value === 'Ok') {
      return renderTasks(createTaskContext.countOK);     
    } else if (value === 'Pending') {
      return renderTasks(createTaskContext.countFALSE);
    } else if (value === 'AllTask') {
      return renderTasks(createTaskContext.tasks);
    }
  }
   
  return (
    <div className='Tasks'>
    
    { MostTasks(createTaskContext.valueFilter)}
  </div>
  )
}
