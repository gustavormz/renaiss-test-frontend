import { IMessage } from '@/models/message'
import { IChat } from '@/models/chat'
import { TDispatch as TMessagesDispatch } from '../../reducer/messagesReducer'
import { TDispatch as TAppDispatch } from '../../reducer/appReducer'
import { TDispatch as TChatDispatch } from '../../reducer/chatReducer'

interface ISendChatCompletition {
  messagesDispatch: TMessagesDispatch
  appDispatch: TAppDispatch
  messages: IMessage[]
  isContinueMessage?: boolean
}

interface ISendChatCompletitionError {
  appDispatch: TAppDispatch
  error: any
}

export type { ISendChatCompletition, ISendChatCompletitionError }
