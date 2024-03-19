import React from 'react'
import './ItemTask.css'
export const ItemTask = ({name,description,onClick}) => {
  return (
    <li>
        <span className='spanCircle'></span>
        <p className='name'>{name} <span className='description'>:{description}</span></p>
        <input type="checkbox" onChange={} onClick={onClick}/>
    </li>
  )
}
