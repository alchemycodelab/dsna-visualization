import { useState } from 'react'
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

export type ProcessedFood = {
  flavor: string,
  id: number,
  image: string,
  name: string,
}

export type QueuedCat = {
  colorRotation: number,
  name: string,
  flavor: string,
  number: number,
}

const randomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const randomElement = <T>(xs: ReadonlyArray<T>): T | undefined => {
  return xs[randomInt(xs.length)]
}

type Cattributes = {
  flavors: ReadonlyArray<string>,
  names: ReadonlyArray<string>,
  recipes: {[key: string]: string},
}

/**
 * Attributes for cats! Get it??
 */
const cattributes: Cattributes = {
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
    'Acomb',
    'Alyst',
    'Apult',
    'Atonic',
    'Astrophe',
    'Cher',
    'Egory',
    'Eracts',
    'Erpillar',
    'Hardic',
    'Hedral',
    'Heter',
    'Hode',
    'Holic',
    'Io',
    'Terer',
    'Tle',
  ],
}


const addCat = (
  setCats: (xs: Array<QueuedCat>) => void,
  setNextCatNumber: (n: number) => void,
  cats: Array<QueuedCat>,
  nextCatNumber: number,
): void => {
  setCats([...cats].concat([{
    colorRotation: randomInt(360 - 1),
    name: randomElement(cattributes.names) || 'Name not found',
    number: nextCatNumber,
    flavor: randomElement(cattributes.flavors) || 'Flavor not found',
  }]))
  setNextCatNumber(nextCatNumber + 1)
}

const toFood = (cat: QueuedCat): ProcessedFood => {
  return {
    flavor: cat.flavor,
    id: cat.number,
    image: cattributes.recipes[cat.flavor] || 'whoops',
    name: 'grilled ' + cat.name,
  }
}

export const defaultCat = (): QueuedCat => {
  return {
    colorRotation: 0,
    flavor: 'No flavor',
    name: 'Cat not found',
    number: -1,
  }
}

export default function useCat() {
  const [nextCatNumber, setNextCatNumber] = useState(0)
  const [cats, setCats] = useState<Array<QueuedCat>>([])
  const [foods, setFoods] = useState<Array<ProcessedFood>>([])
  const [blendHovered, setBlendHovered] = useState(false)
  const blendCat = () => {
    const cat = cats.shift() || defaultCat()
    setCats(cats)
    setFoods([...foods].concat(toFood(cat)))
  }
  return {
    addCat,
    cats,
    setCats,
    foods,
    blendHovered,
    setBlendHovered,
    nextCatNumber,
    setNextCatNumber,
    blendCat,
  }
}
