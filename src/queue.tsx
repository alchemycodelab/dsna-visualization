import React, { type FC, type ReactElement } from 'react'
import buttonFn from './button'
import buttonStyles from './button.module.css'
import catImageFn from './cat-image'
import catQueueFn from './cat-queue'
import processedCatsFn from './processed-cats'
import imageStyles from './image.module.css'
import listItemStyles from './list-item.module.css'
import listStyles from './list.module.css'
import useCat from './use-cat'

type Props = {}

type Component = FC<Props>

const AddCatButton = buttonFn(buttonStyles.addCat)
const PetButton = buttonFn(buttonStyles.pet)
const CatImage = catImageFn(
  listItemStyles.cat,
  imageStyles.catListItem,
);
const CatQueue = catQueueFn(
  AddCatButton,
  CatImage,
  listStyles.catQueue,
)
const ProcessedCats = processedCatsFn(
  listStyles.processedCats,
)

export default (): Component => {
  const Queue = (): ReactElement => {
    const {
      addCat,
      cats,
      processedCats,
      petCat,
    } = useCat()
    return <>
      <CatQueue addCat={addCat} cats={cats} />
      <div style={{display: cats.length > 0 ? 'block' : 'none'}}>
        <PetButton onClick={petCat}> pet {cats[0]?.name} </PetButton>
      </div>
      <ProcessedCats cats={processedCats}/>
    </>
  }
  return Queue
}
