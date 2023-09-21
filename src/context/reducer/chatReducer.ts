import { Dispatch } from 'react'

import { TActionMap } from '../utils'

import { IChat } from '../../models/chat'

enum ETypes {
  SET_CHAT = 'SET_CHAT',
  SET_OPEN_AI_MODELS = 'SET_OPEN_AI_MODELS',
  SET_CHATS = 'SET_CHATS',
  SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT',
}

type TPayload = {
  [ETypes.SET_CHAT]: {
    newChat: IChat
  },
  [ETypes.SET_OPEN_AI_MODELS]: {
    models: string[]
  },
  [ETypes.SET_ACTIVE_CHAT]: {
    activeChat: IChat | undefined
  },
  [ETypes.SET_CHATS]: {
    chats: IChat[]
  },
}

type TActions = TActionMap<TPayload>[keyof TActionMap<TPayload>]

type TDispatch = Dispatch<TActions>

interface IState {
  activeChat?: IChat
  chats: IChat[]
  models: string[]
}

const initialState: IState = {
  activeChat: undefined,
  chats: [],
  models: [],
}

const reducer = (state: IState, action: TActions) => {
  const { type } = action

  switch (type) {
  case ETypes.SET_CHAT: {
    const currentChats = [...state.chats]
    currentChats.push(action.payload.newChat)
    return {
      ...state,
      chats: currentChats,
      activeChat: action.payload.newChat
    }
  }
  case ETypes.SET_ACTIVE_CHAT: {
    return {
      ...state,
      activeChat: action.payload.activeChat,
    }
  }
  case ETypes.SET_OPEN_AI_MODELS: {
    return {
      ...state,
      models: action.payload.models,
    }
  }
  case ETypes.SET_CHATS: {
    return {
      ...state,
      chats: action.payload.chats,
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
}
