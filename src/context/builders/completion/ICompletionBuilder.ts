import { IBlock } from '../../../utils/markdownCode'
import { IMessage } from '../../../models/message/IMessageModel'

interface IBuildChatCompletitionBodyProps {
  messages: IMessage[]
}

interface IBuildAIMessageFormatedProps {
  message: string
}

interface IBuildUserMessageProps {
  message: string
}

interface IBuildAIMessageProps {
  messageParts: IBlock[]
}

export type {
  IBuildChatCompletitionBodyProps,
  IBuildAIMessageFormatedProps,
  IBuildUserMessageProps,
  IBuildAIMessageProps,
}
