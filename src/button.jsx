import React from 'react'

export default (className) => {
  const Button = (props) => {
    const onMouseOver = props.onMouseOver || (() => {})
    const onMouseLeave = props.onMouseLeave || (() => {})
    return <button
      className={className}
      onClick={props.onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </button>
  }
  return Button
}
