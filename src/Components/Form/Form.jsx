import React from 'react'
import { Button } from '../Button/Button'
import { Inputs } from '../Inputs/Inputs'
import './Form.css'


export const Form = () => {
  return (
    <form action="">
        <Inputs text="Titulo De La Tarea: "/>
        <Inputs text="Descripcion De La Tarea: "/>
        <Button text="Enviar"/>
    </form>
    

  )
}
