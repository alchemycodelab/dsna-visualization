import React, { type FC, type ReactNode, type ReactElement } from 'react'

export type Props = {
  children: ReactNode,
}

export default (): FC<Props> => {
  const component = (props: Props): ReactElement => {
    return <>
      {props.children}
    </>
  }
  component.displayName = 'CatLifeEvent'
  return component
}
