import React from 'react'
import './ItemTask.css'
export const ItemTask = ({name,description,onChange,checked}) => {
  return (
    <li>
        <span className={checked ? 'spanCircle greenCircle' : 'spanCircle'}></span>
        <p className='name'>{name} <span className='description'>:{description}</span></p>
        <input type="checkbox" checked={checked} onChange={onChange}/>
    </li>
  )
}
