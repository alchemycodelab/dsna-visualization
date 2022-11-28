import React, { type FC, type ReactNode, type ReactElement } from 'react'

export type Props = {
  children: ReactNode,
}

export default (): FC<Props> => {
  const component = (props: Props): ReactElement => {
    return <div>
      <h2>Cat life events</h2>
      <table>
        <thead>
          <tr>
            <td>date</td>
            <td>event</td>
            <td>cat</td>
            <td>lives left</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022.11.27</td>
            <td>lost a life</td>
            <td>Acylsm</td>
            <td>8</td>
          </tr>
          <tr>
            <td>2022.11.26</td>
            <td>went to the petting queue</td>
            <td>Agory</td>
            <td>8</td>
          </tr>
          <tr>
            <td>2022.11.25</td>
            <td>made friends with a dog</td>
            <td>Spaw</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>

    </div>
  }
  component.displayName = 'CatLifeEvent'
  return component
}
