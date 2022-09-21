import React from 'react'

export default () => {
  const Food = (props) => {
    return <li>
      <img src={props.img} />
    </li>
  }
  return Food
}
