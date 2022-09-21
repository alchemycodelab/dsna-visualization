import React from 'react'

export default (CatImage, listClassName) => {
  const CatQueue = (props) => {
    return <section>
      Petting queue!
      <button
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
      </button>
        <ol className={listClassName}>
        {props.cats.map((cat) => {
          return <CatImage cat={cat} key={cat.number} />
        })}
      </ol>
    </section>
  }
  return CatQueue
}
