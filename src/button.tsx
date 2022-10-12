import React, { type FC, type ReactNode, type ReactElement } from 'react'

export type Props = {
  children: ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>,
  onMouseLeave?:  React.MouseEventHandler<HTMLButtonElement>,
}

export type Component = FC<Props>

export default (className: string): FC<Props> => {
  const Button = (props: Props): ReactElement => {
    return <button
      className={className}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </button>
  }
  return Button
}
