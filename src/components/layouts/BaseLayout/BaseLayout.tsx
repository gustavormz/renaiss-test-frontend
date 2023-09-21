import { IBaseLayoutProps } from './IBaseLayout'

const BaseLayout = ({
  leftContent,
  rightContent,
  hiddeLeft = false,
}: IBaseLayoutProps) => (
  <div className="flex grow px-33 py-37">
    {leftContent && (
      <div className={`w-5/12 flex ${hiddeLeft && 'hidden'}`}>
        {leftContent}
      </div>
    )}
      <div className={`ml-20 flex ${!hiddeLeft ? 'w-7/12' : 'w-full'}`}>
          {rightContent}
      </div>
  </div>
)

export default BaseLayout
