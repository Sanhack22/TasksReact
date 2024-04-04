import {React,useContext,useRef} from 'react'
import { Button } from '../Button/Button'
import './Form.css'
import { taskContext } from '../Context/Context'


export const Form = () => {
  const context = useContext(taskContext)

  const nameTask = useRef('')
  const descriptionTask = useRef('')

  const cleanInput=()=>{
    nameTask.current.value=''
    descriptionTask.current.value=''
  }
  const ConfirmValue=(event)=>{
    event.preventDefault()

    if (nameTask.current.value===""||descriptionTask.current.value==="") {
        return alert("Porfavor Agregue Todos Los Campos")
    }
    SetTaskss()
    cleanInput()
  }

  const SetTaskss = () => {
    
    let newTask = {
      id: context.count,
      name: nameTask.current.value,
      description: descriptionTask.current.value,
      status:false

    }
    context.setCount(context.count+1)
    context.setTasks([...context.tasks, newTask])

    alert("Se agregó la tarea Exitosamente")

    
    
    
  }

  return (
    <form action="">
      <label htmlFor="">Titulo Tarea:</label>
      <input ref={nameTask} type="text"  />
      <label htmlFor="">Descripcion</label>
      <input ref={descriptionTask} type="text"  />
        <Button  text="Enviar" onClick={ConfirmValue}/>
    </form>
    

  )
}
