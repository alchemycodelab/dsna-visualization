import React, { type FC, type ReactElement } from 'react'
import { type QueueCat } from './use-cat'

export type Props = {
  cats: ReadonlyArray<QueueCat>,
}

export type Component = FC<Props>

export default (listStyle: string): FC<Props> => {
  const component = (props: Props): ReactElement => {
    return <ul className={listStyle}>
      {props.cats.map((cat) => {
        return <li key={cat.number}>
          {cat.name} has been pet {cat.pets} times.
        </li>
      })
      }
    </ul>
  }
  component.displayName = 'ProcessedCats'
  return component
}
