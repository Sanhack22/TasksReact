import {React,useContext,useRef} from 'react'
import { Button } from '../Button/Button'
import './Form.css'
import { taskContext } from '../Context/Context'


export const Form = () => {
  const context = useContext(taskContext)

  const nameTask = useRef('')
  const descriptionTask = useRef('')

  const SetTaskss = (event) => {
    event.preventDefault()
    
    let newTask = {
      id: context.count,
      name: nameTask.current.value,
      description: descriptionTask.current.value,
      status:false

    }
    context.setCount(context.count+1)
    context.setTasks([...context.tasks, newTask])
    console.log(context.tasks);
    
    
    
  }

  return (
    <form action="">
      <label htmlFor="">Titulo Tarea:</label>
      <input ref={nameTask} type="text" />
      <label htmlFor="">Descripcion</label>
      <input ref={descriptionTask} type="text" />
        <Button  text="Enviar" onClick={SetTaskss}/>
    </form>
    

  )
}
