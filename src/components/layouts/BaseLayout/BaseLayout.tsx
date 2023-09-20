import { IBaseLayoutProps } from './IBaseLayout'

const BaseLayout = ({
  leftContent,
  rightContent
}: IBaseLayoutProps) => (
  <div className="flex grow">
    {leftContent && (
      <div className="w-5/12 bg-gray-200 p-4">
        {leftContent}
      </div>
    )}
      <div className={`w-7/12 ${!leftContent && 'w-full'} bg-gray-300 p-4`}>
          {rightContent}
      </div>
  </div>
)

export default BaseLayout
