import React, { type FC, type ReactElement } from 'react';

export type Props = {}

export type Component = FC<Props>

export default (): Component => {
  const Home = (props: Props): ReactElement => {
    return <>
      Navigate using the links above to explore data structures and algorithms!
    </>
  }
  return Home
}
