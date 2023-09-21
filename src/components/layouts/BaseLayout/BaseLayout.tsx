import { IBaseLayoutProps } from './IBaseLayout'

const BaseLayout = ({
  leftContent,
  rightContent
}: IBaseLayoutProps) => (
  <div className="flex grow px-33 py-37">
    {leftContent && (
      <div className="w-5/12 flex">
        {leftContent}
      </div>
    )}
      <div className={`ml-20 flex ${leftContent ? 'w-7/12' : 'w-full'}`}>
          {rightContent}
      </div>
  </div>
)

export default BaseLayout
