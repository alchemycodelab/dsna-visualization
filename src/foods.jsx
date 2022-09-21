import React from 'react'

export default (FoodImage, listClassName) => {
  const Foods = (props) => {
    return <ol className={listClassName}>
      {props.foods.map((food) => {
        return <FoodImage food={food}  key={food.id} />
      })}
    </ol>
  }
  return Foods
}
