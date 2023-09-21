import { IChat } from '@/models/chat'

interface IHistoryChatCardProps extends IChat {
  handleOnConfirm: (id: string) => void
  handleRetrieveChat: (id: string) => void
}

export type {
  IHistoryChatCardProps
}
