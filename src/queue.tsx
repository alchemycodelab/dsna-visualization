import React, { useState } from 'react'
import buttonFn from './button'
import buttonStyles from './button.module.css'
import catImageFn from './cat-image'
import catQueueFn from './cat-queue'
import foodsFn from './foods'
import foodImageFn from './food-image'
import imageStyles from './image.module.css'
import listItemStyles from './list-item.module.css'
import listStyles from './list.module.css'
import useCat from './use-cat'

type Props = {}

const AddCatButton = buttonFn(buttonStyles['add-cat'])
const BlendButton = buttonFn(buttonStyles.blend)
const CatImage = catImageFn(
  listItemStyles['cat'],
  imageStyles['cat-list-item'],
);
const CatQueue = catQueueFn(
  AddCatButton,
  CatImage,
  listStyles['cat-queue'],
  listItemStyles['cat'],
)
const Foods = foodsFn(
  foodImageFn(imageStyles['food-list-item']),
  listItemStyles['food'],
)

const forceState = <A,>(set: (a: A) => void, state: A): void => {
  set(state)
}


export default () => {
  const Queue = (props: Props) => {
    const {
      addCat,
      cats,
      setCats,
      foods,
      blendHovered,
      setBlendHovered,
      nextCatNumber,
      setNextCatNumber,
      blendCat,
    } = useCat()
    const catQueueProps = {
      addCat,
      cats,
      nextCatNumber,
      setCats,
      setNextCatNumber,
    }
    return <>
      <CatQueue {...catQueueProps} />
      <div style={{display: cats.length > 0 ? 'block' : 'none'}}>
        <BlendButton
          onClick={blendCat}
          onMouseOver={() => forceState(setBlendHovered, true)}
          onMouseLeave={() => forceState(setBlendHovered, false)}
        >
          { blendHovered ? 'blend' : 'pet' } {cats[0]?.name}
        </BlendButton>
      </div>
      <Foods foods={foods}/>
    </>
  }
  return Queue
}
