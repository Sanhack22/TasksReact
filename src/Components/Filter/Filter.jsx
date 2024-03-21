import {React, useContext } from 'react'
import './Filter.css'
import { taskContext } from '../Context/Context'
import { ItemTask } from '../ItemTask/ItemTask'

export const Filter = () => {
  const filterContext = useContext(taskContext)

  function filterTask(valu) {
    if (valu=='AllTask') {

      filterContext.tasks.map(x=>{
        <ItemTask onChange={(event) => CheckboxChange(event, task.id)} checked={task.status} key={task.name + index} name={task.name} description={task.description} />
      })      
    }
  }

  return (
    <div className='Filter'>
        <h3>Filtrar:</h3>
        <select onChange={(event) => filterTask(event.target.value)} name="" id="">
            <option value="AllTask">Totas Las Tareas</option>
            <option value="Pending">Pendientes</option>
            <option value="Ok">Resueltas</option>
        </select>
    </div>
  )
}
