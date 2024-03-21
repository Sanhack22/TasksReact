import React from 'react'
import './Tasks.css'
export const Tasks = ({children}) => {
  function filterTask(valu) {
    if (valu=='AllTask') {

      filterContext.tasks.map(x=>{
        <ItemTask onChange={(event) => CheckboxChange(event, task.id)} checked={task.status} key={task.name + index} name={task.name} description={task.description} />
      })      
    }
  }
  return (
    <div className='Tasks'>
        {children}
    </div>
  )
}
