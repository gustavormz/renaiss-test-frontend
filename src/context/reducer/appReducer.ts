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
  }
}

type TActions = TActionMap<TPayload>[keyof TActionMap<TPayload>]

type TDispatch = Dispatch<TActions>

interface IState {
  isFetching: boolean
  error: IError | undefined
  reset?: boolean
}

const initialState: IState = {
  isFetching: false,
  error: undefined,
  reset: false,
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
