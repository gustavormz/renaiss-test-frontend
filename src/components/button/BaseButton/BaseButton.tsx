import { IBaseButtonProps } from './IBaseButton'

const BaseButton = ({
  icon,
  text,
  onClick,
  className,
}: IBaseButtonProps) => (
  <button
    onClick={onClick}
    className={
      `h-45 min-w-45 rounded-md border border-white flex px-10
      justify-center items-center space-x-1 flex-shrink-0 ${className}`
    }>
    {icon}
    {text && <span>{text}</span>}
  </button>
)

export default BaseButton