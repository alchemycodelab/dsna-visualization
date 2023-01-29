import { useState } from 'react'

export type QueueCat = {
  colorRotation: number,
  name: string,
  number: number,
  pets: number,
}

const randomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const randomElement = <T>(xs: ReadonlyArray<T>): T | undefined => {
  return xs[randomInt(xs.length)]
}

type Cattributes = {
  names: ReadonlyArray<string>,
}

/**
 * Attributes for cats! Get it??
 */
const cattributes: Cattributes = {
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
    'Erer',
    'Erpillar',
    'Hardic',
    'Hedral',
    'Heter',
    'Hode',
    'Holic',
    'Io',
    'Tle',
  ],
}

const createCat = (nextCatNumber: number): QueueCat => {
  return {
    colorRotation: randomInt(360 - 1),
    name: randomElement(cattributes.names) || 'Name not found',
    number: nextCatNumber,
    pets: 0,
  }
}

const availableCat = (
  processedCats: ReadonlyArray<QueueCat>,
): QueueCat | null | undefined => {
  return processedCats.length > 0
    ? randomElement(processedCats)
    : null
}

// Mostly because TypeScript can't do more than 4-5 arguments with bind out of
// the box...
type CatSetters = {
  setCats: (xs: Array<QueueCat>) => void,
  setProcessedCats: (xs: Array<QueueCat>) => void,
  setNextCatNumber: (n: number) => void,
}

const addCat = (
  { setCats, setProcessedCats, setNextCatNumber }: CatSetters,
  nextCatNumber: number,
  cats: Array<QueueCat>,
  processedCats: ReadonlyArray<QueueCat>,
): void => {
  const catToEnqueue = availableCat(processedCats) || createCat(nextCatNumber)
  setProcessedCats(processedCats.filter(cat => cat.name !== catToEnqueue.name))
  setCats(cats.concat([catToEnqueue]))
  setNextCatNumber(nextCatNumber + 1)
}

export const processCat = (cat: QueueCat): QueueCat => {
  return {
    ...cat,
    pets: cat.pets + 1,
  }
}

export const defaultCat = (): QueueCat => {
  return {
    colorRotation: 0,
    name: 'Cat not found',
    number: -1,
    pets: 0,
  }
}


export default function useCat() {
  const [nextCatNumber, setNextCatNumber] = useState(0)
  const [cats, setCats] = useState<Array<QueueCat>>([])
  const [processedCats, setProcessedCats] = useState<Array<QueueCat>>([])
  const petCat = () => {
    const cat = cats.shift() || defaultCat()
    setCats(cats)
    setProcessedCats([...processedCats].concat(processCat(cat)))
  }
  return {
    addCat: addCat.bind(
      null,
      {
        setCats,
        setNextCatNumber,
        setProcessedCats,
      },
      nextCatNumber,
      cats,
      processedCats,
    ),
    cats,
    processedCats,
    petCat,
  }
}
