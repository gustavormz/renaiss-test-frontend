'use client'

import React, { useReducer, createContext, useContext, useMemo } from 'react'

import { IState, reducer, initialState, TDispatch } from '../reducer/chatReducer'

interface IProps {
  children: React.JSX.Element
}

interface IContextProps {
  state: IState
  dispatch: TDispatch
}

const Store = createContext({} as IContextProps)

const useChatContext = () => useContext(Store)

const State = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <Store.Provider value={value}>{children}</Store.Provider>
}

export default State

export { Store, useChatContext }

export type { IContextProps }
