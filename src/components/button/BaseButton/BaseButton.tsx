import { IBaseButtonProps } from './IBaseButton'

const BaseButton = ({
  icon,
  text,
  onClick,
  className = '',
  type = 'primary'
}: IBaseButtonProps) => (
  <button
    onClick={onClick}
    className={
      `h-45 min-w-45 rounded-md border border-white flex px-10
      justify-center items-center space-x-1 flex-shrink-0 ${className}
      ${type === 'secondary' && 'border-none bg-primary'}`
    }>
    {icon}
    {text && <span>{text}</span>}
  </button>
)

export default BaseButton