'use client'

import {
  INewChatProps,
  IDeleteChatProps,
  IUpdateChatProps,
  ISetChatProps,
} from './IChatActions'

import { ETypes as EMessagesTypes } from '../../reducer/messagesReducer'
import { ETypes as EChatTypes } from '../../reducer/chatReducer'

import { generateUniqueId } from './utils'

const newChat = ({
  chatDispatch,
  openAIModel,
  messagesDispatch,
  reset = false
}: INewChatProps) => {
  if (reset) {
    messagesDispatch({
      type: EMessagesTypes.SET_MESSAGES,
      payload: {
        messages: []
      }
    })
  }

  chatDispatch({
    type: EChatTypes.SET_CHAT,
    payload: {
      newChat: {
        id: generateUniqueId(),
        messages: [],
        openAIModel: openAIModel || process.env.NEXT_PUBLIC_OPEN_AI_GPT_MODEL || ''
      }
    }
  })
}

const deleteChat = ({
  chatDispatch,
  chatId,
  chats,
  activeChat,
  messagesDispatch,
}: IDeleteChatProps) => {
  if (activeChat && activeChat.id === chatId) {
    chatDispatch({
      type: EChatTypes.SET_ACTIVE_CHAT,
      payload: { activeChat: undefined }
    })
    messagesDispatch({
      type: EMessagesTypes.SET_MESSAGES,
      payload: {
        messages: []
      }
    })
  }
  const newChats = chats.filter(chat => chat.id !== chatId)
  chatDispatch({
    type: EChatTypes.SET_CHATS,
    payload: { chats: newChats }
  })
}

const updateChat = ({
  chatDispatch,
  chatId,
  chats,
  messages,
}: IUpdateChatProps) => {
  if (!chatId) {
    return
  }
  const copyChats = [...chats]
  const currentChatIndex = copyChats.findIndex((chat) => chat.id === chatId)
  if (currentChatIndex === -1) {
    return
  }
  const currentChat = copyChats[currentChatIndex]
  currentChat.messages = [...messages]
  copyChats[currentChatIndex] = { ...currentChat }
  chatDispatch({
    type: EChatTypes.SET_CHATS,
    payload: { chats: copyChats }
  })
}

const setChat = ({
  chatDispatch,
  chatId,
  chats,
  messagesDispatch,
}: ISetChatProps) => {
  const activeChat = chats.find(chat => chat.id === chatId)
  if (activeChat) {
    chatDispatch({
      type: EChatTypes.SET_ACTIVE_CHAT,
      payload: { activeChat }
    })
    messagesDispatch({
      type: EMessagesTypes.SET_MESSAGES,
      payload: { messages: activeChat.messages }
    })
  }
}

const actions = {
  newChat,
  deleteChat,
  updateChat,
  setChat,
}

export default actions
