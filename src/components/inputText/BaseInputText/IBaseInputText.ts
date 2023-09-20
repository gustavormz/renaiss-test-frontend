import { ChangeEventHandler, ReactNode } from 'react'

interface IBaseInputText {
  icon?: ReactNode
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  onClick?: () => void
  value?: string
}

export type { IBaseInputText }
