import React from 'react'
import './ItemTask.css'
export const ItemTask = (props) => {
  return (
    <li>
        <span className='spanCircle'></span>
        <p className='name'>{props.name} <span className='description'>: {props.description}</span></p>
        
        <input type="checkbox" />
    </li>
  )
}
