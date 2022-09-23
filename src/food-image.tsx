import React, { type FC, type ReactElement } from 'react'
import { type ProcessedFood } from './use-cat'

export type Props = {
  food: ProcessedFood,
}

export type Component = FC<Props>

export default (className: string) => {
  const FoodImage = (props: Props): ReactElement => {
    return <li className={className}>
      <img alt={props.food.name} src={props.food.image} title={props.food.name} />
    </li>
  }
  return FoodImage
}
