import React from "react"
import classes from './Button'

function Button(props) {

  return (
    <button
    >
      {props.children}
    </button>
  )
}

export default Button