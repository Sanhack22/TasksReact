import React from 'react'
import './Button.css'

export const Button = (props) => {
  return (
    <button onClick={props.onClick} className="send" id={props.id}>{props.text}</button>
  )
}
