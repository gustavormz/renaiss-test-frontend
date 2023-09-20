import { RoleTypes } from '../../../models/completion'
import { IMessage } from '../../../models/message'
import { IBlock } from '../../../utils/markdownCode'

import { IBuildAIMessageProps, IBuildMessagesProps, IBuildUserMessageProps } from './IMessageBuilder'

const buildUserMessage = ({
  message,
  date,
}: IBuildUserMessageProps): IMessage => ({
  date: date ? new Date(date) : new Date(),
  message: message,
  sender: RoleTypes.USER,
  receiver: '',
})

const buildAIMessage = ({
  messageParts,
  date,
}: IBuildAIMessageProps): IMessage => ({
  date: date ? new Date(date) : new Date(),
  message: '',
  sender: RoleTypes.AI,
  receiver: '',
  messageParts,
})

const buildMessages = ({ messages }: IBuildMessagesProps): IMessage[] => {
  return messages.map(message => {
    if (message.sender === RoleTypes.USER) {
      return buildUserMessage({ message: message.message, date: message.date.toString() })
    } else {
      return buildAIMessage({
        messageParts: message.message as unknown as IBlock[],
        date: message.date.toString(),
      })
    }
  })
}

const MessageBuilders = {
  buildUserMessage,
  buildAIMessage,
  buildMessages,
}

export default MessageBuilders
