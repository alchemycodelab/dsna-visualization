import React, { type FC, type ReactElement } from 'react'

export type Props = {}

export type Component = FC<Props>

export default (): Component => {
  const LinkedList = (props: Props): ReactElement => {
    return <section>
      Nothing to see here yet!
    </section>
  }
  return LinkedList
}
