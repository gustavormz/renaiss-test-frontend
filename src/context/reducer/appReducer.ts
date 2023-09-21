import { Dispatch } from 'react'

import { TActionMap } from '../utils'

interface IError {
  message: string
  type: string
  status: number
}

enum ETypes {
  SET_IS_FETCHING = 'SET_IS_FETCHING',
  SET_ERROR = 'SET_ERROR',
  SET_RESET = 'SET_RESET',
  SET_OPEN_PANEL = 'SET_OPEN_PANEL',
}

type TPayload = {
  [ETypes.SET_IS_FETCHING]: {
    isFetching: boolean
  },
  [ETypes.SET_ERROR]: {
    error: IError
  },
  [ETypes.SET_RESET]: {
    reset: boolean
  },
  [ETypes.SET_OPEN_PANEL]: {
    openPanel: boolean
  },
}

type TActions = TActionMap<TPayload>[keyof TActionMap<TPayload>]

type TDispatch = Dispatch<TActions>

interface IState {
  isFetching: boolean
  error: IError | undefined
  reset?: boolean
  openPanel: boolean
}

const initialState: IState = {
  isFetching: false,
  error: undefined,
  reset: false,
  openPanel: true,
}

const reducer = (state: IState, action: TActions) => {
  const { type } = action

  switch (type) {
  case ETypes.SET_IS_FETCHING: {
    return {
      ...state,
      isFetching: action.payload.isFetching,
    }
  }
  case ETypes.SET_ERROR: {
    return {
      ...state,
      error: action.payload.error,
    }
  }
  case ETypes.SET_RESET: {
    return {
      ...state,
      reset: action.payload.reset
    }
  }
  case ETypes.SET_OPEN_PANEL: {
    return {
      ...state,
      openPanel: action.payload.openPanel
    }
  }
  default:
    throw new Error('Define an action')
  }
}

export {
  ETypes,
  initialState,
  reducer,
}

export type {
  TActions,
  IState,
  TPayload,
  TDispatch,
  IError,
}
