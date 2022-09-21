import React from 'react'

export default (className) => {
  const FoodImage = (props) => {
    console.log('food image props', props)
    return <li className={className}>
      <img src={props.food.image} />
    </li>
  }
  return FoodImage
}
