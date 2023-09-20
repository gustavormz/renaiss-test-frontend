import { ReactNode } from 'react'

interface IBaseButtonProps {
  icon?: ReactNode
  text?: string
  onClick?: () => void
  className?: string
}

export type { IBaseButtonProps }
