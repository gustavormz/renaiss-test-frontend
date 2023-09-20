import { Dispatch } from 'react'

import { TActionMap } from '../utils'

import { IMessage } from '../../models/message'
import { RoleTypes, } from '../../models/completion'

import MessageBuilder from '../builders/message/MessageBuilder'

import { IBlock } from '../../utils/markdownCode'

enum ETypes {
  SET_MESSAGE_AI = 'SET_MESSAGE_AI',
  SET_MESSAGE_USER = 'SET_MESSAGE_USER',
  SET_MESSAGE_SYSTEM = 'SET_MESSAGE_SYSTEM',
  SET_SHOW_CONTINUE_MESSAGE_OPTION = 'SET_SHOW_CONTINUE_MESSAGE_OPTION',
  SET_TOPIC = 'SET_TOPIC',
  SET_MESSAGES = 'SET_MESSAGES',
  SET_OPEN_AI_MODEL = 'SET_OPEN_AI_MODEL', 
}

type TPayload = {
  [ETypes.SET_MESSAGE_AI]: {
    messageParts: IBlock[]
  },
  [ETypes.SET_MESSAGE_USER]: {
    message: string
  },
  [ETypes.SET_MESSAGE_SYSTEM]: {
    message: string
  },
  [ETypes.SET_SHOW_CONTINUE_MESSAGE_OPTION]: {
    showContinueMessageOption: boolean
  },
  [ETypes.SET_TOPIC]: {
    topic: string
  },
  [ETypes.SET_MESSAGES]: {
    messages: IMessage[]
  },
  [ETypes.SET_OPEN_AI_MODEL]: {
    model: string
  },
}

type TActions = TActionMap<TPayload>[keyof TActionMap<TPayload>]

type TDispatch = Dispatch<TActions>

interface IState {
  messages: IMessage[]
  lastMessageSendBy: typeof RoleTypes[keyof typeof RoleTypes]
  showContinueMessageOption: boolean
  topic?: string
  messageSystem?: string
  openAIModel?: string
}

const initialState: IState = {
  messages: [],
  lastMessageSendBy: RoleTypes.USER,
  showContinueMessageOption: false,
  topic: '',
  messageSystem: '',
  openAIModel: '',
}

const reducer = (state: IState, action: TActions) => {
  const { type } = action

  switch (type) {
  case ETypes.SET_MESSAGE_AI: {
    const messagesCopy = [...state.messages]
    const newAIMessage: IMessage = MessageBuilder.buildAIMessage({ messageParts: action.payload.messageParts })

    messagesCopy.push(newAIMessage)

    return {
      ...state,
      messages: [...messagesCopy],
      lastMessageSendBy: RoleTypes.AI,
    }
  }
  case ETypes.SET_MESSAGE_USER: {
    const messagesCopy = [...state.messages]
    const newAIMessage: IMessage = MessageBuilder.buildUserMessage({ message: action.payload.message })

    messagesCopy.push(newAIMessage)

    return {
      ...state,
      messages: [...messagesCopy],
      lastMessageSendBy: RoleTypes.USER,
    }
  }
  case ETypes.SET_MESSAGE_SYSTEM: {
    return {
      ...state,
      messageSystem: action.payload.message,
    }
  }
  case ETypes.SET_SHOW_CONTINUE_MESSAGE_OPTION: {
    return {
      ...state,
      showContinueMessageOption: action.payload.showContinueMessageOption,
    }
  }
  case ETypes.SET_TOPIC: {
    return {
      ...state,
      topic: action.payload.topic,
    }
  }
  case ETypes.SET_MESSAGES: {
    return {
      ...state,
      messages: action.payload.messages,
    }
  }
  case ETypes.SET_OPEN_AI_MODEL: {
    return {
      ...state,
      openAIModel: action.payload.model
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

