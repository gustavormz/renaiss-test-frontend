import { IBaseLayoutProps } from './IBaseLayout'

const BaseLayout = ({
  leftContent,
  rightContent
}: IBaseLayoutProps) => (
  <div className="flex grow px-33 py-37">
    {leftContent && (
      <div className="w-5/12">
        {leftContent}
      </div>
    )}
      <div className={`w-7/12 ${!leftContent && 'w-full'}`}>
          {rightContent}
      </div>
  </div>
)

export default BaseLayout
