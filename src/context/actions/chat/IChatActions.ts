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
}

interface IDeleteChatProps {
  chatDispatch: TChatDispatch
  chatId: string
  chats: IChat[]
}

interface IUpdateChatProps {
  chatId: string
  chats: IChat[]
  chatDispatch: TChatDispatch
  messages: IMessage[]
}

export type { INewChatProps, IDeleteChatProps, IUpdateChatProps }
