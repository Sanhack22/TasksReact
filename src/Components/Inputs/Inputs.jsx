import React from 'react'
import './Inputs.css'

export const Inputs = (props) => {

  

  return (
    <div className='divInput'>
        <label htmlFor="">{props.text}</label>
        <input  id={props.id} type="text" />
    </div>
    
  )
}
