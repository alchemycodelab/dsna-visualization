import React, { type FC, type ReactElement } from 'react'
import { type ProcessedFood } from './use-cat'

export type Props = {
  food: ProcessedFood,
}

export type Component = FC<Props>

export default (imageClassName: string, listItemClassName: string) => {
  const FoodImage = (props: Props): ReactElement => {
    return <li className={listItemClassName}>
      <img
        alt={props.food.name}
        className={imageClassName}
        src={props.food.image}
        title={props.food.name}
      />
    </li>
  }
  return FoodImage
}
