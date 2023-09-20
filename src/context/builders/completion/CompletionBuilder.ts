
import MarkDownCode, { IBlock } from '../../../utils/markdownCode'
import Constants from '../../../utils/constants'
import { IChatCompletion, IChatCompletionMessage, RoleTypes } from '../../../models/completion/ICompletionModel'
import { IMessage } from '../../../models/message/IMessageModel'

import {
  IBuildChatCompletitionBodyProps,
  IBuildAIMessageFormatedProps,
  IBuildUserMessageProps,
  IBuildAIMessageProps,
} from './ICompletionBuilder'

const buildChatCompletitionBody = ({
  messages,
}: IBuildChatCompletitionBodyProps): IChatCompletion => {
  const contextMessages =
    messages.length <= Constants.MAX_CONTEXT_MESSAGES
      ? [...messages]
      : [...messages].slice(-Constants.MAX_CONTEXT_MESSAGES)
  const chatCompletionMessages: IChatCompletionMessage[] =
    contextMessages.map(message => ({
      content: message.message,
      role: message.sender,
    }))

  return {
    model: process.env.OPEN_AI_GPT_MODEL ?? '',
    messages: chatCompletionMessages,
  }
}

const buildAIMessageFormated = ({ message }: IBuildAIMessageFormatedProps): IBlock[] => {
  const messageParts = MarkDownCode.detectIBlocksOfTextAndCode(message)
  return messageParts
}

const buildUserMessage = ({ message }: IBuildUserMessageProps): IMessage => ({
  date: new Date(),
  message: message,
  sender: RoleTypes.USER,
  receiver: '',
})

const buildAIMessage = ({ messageParts }: IBuildAIMessageProps): IMessage => ({
  date: new Date(),
  message: '',
  sender: RoleTypes.AI,
  receiver: '',
  messageParts,
})

const CompletionBuilders = {
  buildChatCompletitionBody,
  buildAIMessageFormated,
  buildUserMessage,
  buildAIMessage,

}

export default CompletionBuilders
