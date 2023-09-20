import { IMessage } from '../message'

interface IChat {
  messages: IMessage[] | []
  id: string
  openAIModel: string
}

export type { IChat }
