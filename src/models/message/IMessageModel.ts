import { RoleTypes } from '../completion'

import { IBlock } from '../../utils/markdownCode'

interface IMessage {
  sender: (typeof RoleTypes)[keyof typeof RoleTypes]
  receiver?: string
  message: string
  date: Date
  isLatestMessage?: boolean
  messageParts?: IBlock[]
}

export type { IMessage }
