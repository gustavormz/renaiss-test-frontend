import { ReactNode } from 'react'

interface IBaseButtonProps {
  icon?: ReactNode
  text?: string
  onClick?: () => void
  className?: string
  type?: 'primary' | 'secondary'
}

export type { IBaseButtonProps }
