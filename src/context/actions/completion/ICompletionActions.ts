import { IMessage } from '../../../models/message'
import { TDispatch as TMessagesDispatch } from '../../reducer/messagesReducer'
import { TDispatch as TAppDispatch } from '../../reducer/appReducer'

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
