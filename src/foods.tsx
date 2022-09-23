import React, { type FC, type ReactElement } from 'react'
import { type ProcessedFood } from './use-cat'
import { type Component as FoodImageComponent } from './food-image'

export type Props = {
  foods: ReadonlyArray<ProcessedFood>,
}

export type Component = FC<Props>

export default (
  FoodImage: FoodImageComponent,
  listClassName: string,
): Component => {
  const Foods = (props: Props): ReactElement => {
    return <ol className={listClassName}>
      {props.foods.map((food) => {
        return <FoodImage food={food}  key={food.id} />
      })}
    </ol>
  }
  return Foods
}
