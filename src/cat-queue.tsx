import React from 'react'
import { type Component as ButtonComponent } from './button'
import { type Component as CatImageComponent } from './cat-image'
import { type QueueCat } from './use-cat'

export type Props = {
  addCat: () => void,
  cats: Array<QueueCat>,
}

export default (
  AddCatButton: ButtonComponent,
  CatImage: CatImageComponent,
  listClassName: string,
) => {
  const CatQueue = (props: Props) => {
    return <section>
      <div>Petting queue!</div>
      <AddCatButton onClick={props.addCat}>
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
