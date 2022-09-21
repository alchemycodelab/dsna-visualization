import React from 'react'

export default (AddCatButton, CatImage, listClassName) => {
  const CatQueue = (props) => {
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
