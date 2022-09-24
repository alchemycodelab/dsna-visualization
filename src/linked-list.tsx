import React, { type FC, type ReactElement } from 'react'
import buttonFn from './button'
import buttonStyles from './button.module.css'

export type Props = {}

export type Component = FC<Props>

export default (): Component => {
  const AddEventButton = buttonFn(buttonStyles.addLinkedListEvent)
  const LinkedList = (props: Props): ReactElement => {
    return <section>
      <h2>Behold, the life of a cat.</h2>
      <ol>
        <li>
        </li>
      </ol>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Add some cat events.</h2>
        <AddEventButton onClick={() => {}}>chase dogs</AddEventButton>
      </form>
    </section>
  }
  return LinkedList
}
