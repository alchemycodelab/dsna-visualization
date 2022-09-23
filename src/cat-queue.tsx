import React from 'react'
import { type Component as ButtonComponent } from './button'
import { type Component as CatImageComponent } from './cat-image'
import { type QueuedCat } from './use-cat'

export type Props = {
  addCat: (
    setCats: (a: Array<QueuedCat>) => void,
    setNextCatNumber: (a: number) => void,
    cats: Array<QueuedCat>,
    nextCatNumber: number,
  ) => void,
  setCats: (a: Array<QueuedCat>) => void,
  setNextCatNumber: (a: number) => void,
  cats: Array<QueuedCat>,
  nextCatNumber: number,
}

export default (
  AddCatButton: ButtonComponent,
  CatImage: CatImageComponent,
  listClassName: string,
) => {
  const CatQueue = (props: Props) => {
    return <section>
      <div>Petting queue!</div>
      <AddCatButton
        onClick={
          props.addCat.bind(
            null,
            props.setCats,
            props.setNextCatNumber,
            props.cats,
            props.nextCatNumber,
          )
        }
      >
        add cat
      </AddCatButton>
        <ol className={listClassName}>
        {props.cats.map((cat) => {
          return <CatImage cat={cat} key={cat.number} />
        })}
      </ol>
    </section>
  }
  return CatQueue
}
