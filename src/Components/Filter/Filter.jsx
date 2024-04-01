import {React, useContext } from 'react'
import './Filter.css'
import { taskContext } from '../Context/Context'
import { ItemTask } from '../ItemTask/ItemTask'

export const Filter = () => {
  const filterContext = useContext(taskContext)

 

  return (
    <div className='Filter'>
        <h3>Filtrar:</h3>
        <select onChange={(event) => filterContext.filterTask(event.target.value)} name="" id="">
            <option value="AllTask">Totas Las Tareas</option>
            <option value="Pending">Pendientes</option>
            <option value="Ok">Resueltas</option>
        </select>
        
    </div>
  )
}
