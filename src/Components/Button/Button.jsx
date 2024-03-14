import React from 'react'
import './Button.css'

export const Button = (props) => {
  return (
    <button className="send" id={props.id}>{props.text}</button>
  )
}
