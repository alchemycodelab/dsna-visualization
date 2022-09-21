import React, { useState } from 'react'
import buttonFn from './button.jsx'
import buttonStyles from './button.module.css'
import catImageFn from './cat-image.jsx'
import catQueueFn from './cat-queue.jsx'
import foodsFn from './foods.jsx'
import foodImageFn from './food-image.jsx'
import imageStyles from './image.module.css'
import listItemStyles from './list-item.module.css'
import listStyles from './list.module.css'
import baconImage from './bacon.svg'
import bentoImage from './bento.svg'
import burritoImage from './burrito.svg'
import drumstickImage from './drumstick.svg'
import kebabImage from './kebab.svg'
import meatOnBoneImage from './meat-on-bone.svg'
import nigiriImage from './nigiri.svg'
import pitaImage from './pita.svg'
import ramenImage from './ramen.svg'
import saladImage from './salad.svg'
import soupImage from './soup.svg'
import steakImage from './steak.svg'
import stewImage from './stew.svg'

const BlendButton = buttonFn(buttonStyles.blend)
const CatImage = catImageFn(
  listItemStyles['cat'],
  imageStyles['cat-list-item'],
);
const CatQueue = catQueueFn(
  CatImage,
  listStyles['cat-queue'],
  listItemStyles['cat'],
)
const Foods = foodsFn(
  foodImageFn(imageStyles['food-list-item']),
  listItemStyles['food'],
)

const forceState = (set, state) => {
  set(state)
}

const randomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const randomElement = (xs) => {
  return xs[randomInt(xs.length)]
}

const addCat = (setCats, setNextCatNumber, cats, nextCatNumber) => {
  setCats([...cats].concat([{
    colorRotation: randomInt(360 - 1),
    name: randomElement(cattributes.names),
    number: nextCatNumber,
    flavor: randomElement(cattributes.flavors),
  }]))
  setNextCatNumber(nextCatNumber + 1)
}


/**
 * Attributes for cats! Get it??
 */
const cattributes = {
  flavors: [
    'acidic',
    'acrid',
    'bitter',
    'brackish',
    'cardboard',
    'dry',
    'fruity',
    'juicy',
    'mellow',
    // 'mild',
    'prickly',
    'saline',
    'savory',
    'sharp',
    // 'sour',
    // 'sweet',
    // 'zesty',
  ],
  // This is a flavor-to-food mapping.
  recipes: {
    acidic: baconImage,
    acrid: bentoImage,
    bitter: burritoImage,
    brackish: drumstickImage,
    cardboard: kebabImage,
    dry: meatOnBoneImage,
    fruity: nigiriImage,
    juicy: pitaImage,
    mellow: ramenImage,
    // mild: ramenImage,
    prickly: saladImage,
    saline: soupImage,
    savory: steakImage,
    sharp: stewImage,
  },
  names: [
    'Aclysm',
    'Alyst',
    'Apult',
    'Astrophe',
    'Tegory',
    'Cher',
    'Eracts',
    'Erpillar',
    'Hardic',
    'Hedral',
    'Hode',
    'Holic',
    'Io',
    'Terer',
  ],
}

const toFood = (cat) => {
  return {
    flavor: cat.flavor,
    id: cat.number,
    image: cattributes.recipes[cat.flavor],
  }
}

export default () => {
  const Queue = (props) => {
    const [nextCatNumber, setNextCatNumber] = useState(0)
    const [cats, setCats] = useState([])
    const [foods, setFoods] = useState([])
    const [blendHovered, setBlendHovered] = useState(false)
    const blendCat = () => {
      const cat = cats.shift()
      setCats(cats)
      setFoods([...foods].concat(toFood(cat)))
    }
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
          onMouseOver={forceState.bind(null, setBlendHovered, true)}
          onMouseLeave={forceState.bind(null, setBlendHovered, false)}
        >
          { blendHovered ? 'blend' : 'pet' } {cats[0]?.name}
        </BlendButton>
      </div>
      <Foods foods={foods}/>
    </>
  }
  return Queue
}
