import { TDispatch as TMessagesDispatch } from '../../reducer/messagesReducer'
import { TDispatch as TAppDispatch } from '../../reducer/appReducer'
import { TDispatch as TChatDispatch } from '../../reducer/chatReducer'

import { IChat } from '@/models/chat'
import { IMessage } from '@/models/message'

interface INewChatProps {
  chatDispatch: TChatDispatch
  openAIModel?: string
  messagesDispatch: TMessagesDispatch
  reset?: boolean
  currentModel?: string
}

interface IDeleteChatProps {
  chatDispatch: TChatDispatch
  chatId: string
  chats: IChat[]
  activeChat?: IChat
  messagesDispatch: TMessagesDispatch
}

interface IUpdateChatProps {
  chatId?: string
  chats: IChat[]
  chatDispatch: TChatDispatch
  messages: IMessage[]
  activeChat?: IChat
  currentModel?: string
}

interface ISetChatProps {
  chatDispatch: TChatDispatch
  chatId: string
  chats: IChat[]
  messagesDispatch: TMessagesDispatch
}

interface ISetLastActionProps {
  chatDispatch: TChatDispatch
}

interface IUpdateChatWithSystemMessageProps {
  chatId?: string
  chats: IChat[]
  chatDispatch: TChatDispatch
  messages: IMessage[]
  activeChat?: IChat
  systemMessage: string
  messagesDispatch: TMessagesDispatch
  openAIModel?: string
}

export type {
  INewChatProps, IDeleteChatProps, IUpdateChatProps, ISetChatProps, ISetLastActionProps, IUpdateChatWithSystemMessageProps
}
