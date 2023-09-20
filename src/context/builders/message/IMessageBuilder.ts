import { IMessage } from '../../../models/message'
import { IBlock } from '../../../utils/markdownCode'

interface IBuildUserMessageProps {
  message: string
  date?: string
}

interface IBuildAIMessageProps {
  messageParts: IBlock[]
  date?: string
}

interface IBuildMessagesProps {
  messages: IMessage[]
}

export type {
  IBuildAIMessageProps,
  IBuildMessagesProps,
  IBuildUserMessageProps,
}
