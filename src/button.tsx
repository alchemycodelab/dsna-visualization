import React, { type FC, type ReactNode } from 'react'

export type Props = {
  children: ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>,
  onMouseLeave?:  React.MouseEventHandler<HTMLButtonElement>,
}

export type Component = FC<Props>

export default (className: string): FC<Props> => {
  const Button = (props: Props) => {
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
