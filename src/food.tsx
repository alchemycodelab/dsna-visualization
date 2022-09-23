import React, { type FC, type ReactElement } from 'react'

export type Props = {
  img: string,
}

export type Component = FC<Props>

export default (): Component => {
  const Food = (props: Props): ReactElement => {
    return <li>
      <img src={props.img} />
    </li>
  }
  return Food
}
