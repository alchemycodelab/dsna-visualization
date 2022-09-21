import React from 'react'

export default (className) => {
  const FoodImage = (props) => {
    return <li className={className}>
      <img alt={props.food.name} src={props.food.image} title={props.food.name} />
    </li>
  }
  return FoodImage
}
