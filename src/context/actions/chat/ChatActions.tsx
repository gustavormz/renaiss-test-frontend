'use client'

import { INewChatProps, IDeleteChatProps, IUpdateChatProps } from './IChatActions'

import { ETypes as EAppTypes } from '../../reducer/appReducer'
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
  chats
}: IDeleteChatProps) => {
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
  const copyChats = [...chats]
  const currentChatIndex = copyChats.findIndex((chat) => chat.id === chatId)
  const currentChat = copyChats[currentChatIndex]
  currentChat.messages = [...messages]
  copyChats[currentChatIndex] = { ...currentChat }
  chatDispatch({
    type: EChatTypes.SET_CHATS,
    payload: { chats: copyChats }
  })
}

const actions = {
  newChat,
  deleteChat,
  updateChat,
}

export default actions
