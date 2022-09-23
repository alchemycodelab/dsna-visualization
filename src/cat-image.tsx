// This was a handy tool for finding good values to use in the CSS:
// https://jsfiddle.net/3tw2gjwt/52/
// filter: invert(0) sepia(0) saturate(1) hue-rotate(0deg);

import React, { type FC } from 'react'
import { type QueuedCat } from './use-cat'
import catSvg from './cat-wikimedia-commons-01.svg'

export type Props = {
  cat: QueuedCat,
}

export type Component = FC<Props>

export default (listItemClassName: string, imgClassName: string): FC<Props> => {
  const CatImage = (props: Props) => {
    return <li className={listItemClassName} key={props.cat.number}>
      <img
        alt={props.cat.name}
        className={imgClassName}
        src={catSvg}
        style={{filter:
          `invert(0) \
          sepia(0) \
          saturate(1) \
          hue-rotate(${props.cat.colorRotation}deg) \
          `
        }}
      title={props.cat.name}
      ></img>
      <span>{props.cat.name}</span>
      <span>{props.cat.number}</span>
    </li>
}
  return CatImage
}
