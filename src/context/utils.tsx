/* eslint-disable react/display-name */
import React, { ComponentProps, FC } from 'react'

interface IProps {
  children: React.JSX.Element
}

const combineComponents = (...components: FC<IProps>[]): FC<IProps> =>
  components.reduce(
    (AccumulatedComponents, CurrentComponent) =>
      ({ children }: ComponentProps<FC<IProps>>): JSX.Element =>
        (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        ),
    ({ children }) => <>{children}</>,
  )

type TActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export { combineComponents }

export type { TActionMap }
