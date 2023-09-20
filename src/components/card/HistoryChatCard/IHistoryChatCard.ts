import { IChat } from '@/models/chat'

interface IHistoryChatCardProps extends IChat {
  handleOnCancel: (id: string) => void
  handleOnConfirm: (id: string) => void
}

export type {
  IHistoryChatCardProps
}
