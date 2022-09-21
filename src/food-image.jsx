import React from 'react'

export default (className) => {
  const FoodImage = (props) => {
    return <li className={className}>
      <img src={props.food.image} />
    </li>
  }
  return FoodImage
}
