import { ISectionLayoutProps } from './ISectionLayout'

const SectionLayout = ({
  children,
  className = '',
  title,
  button
}: ISectionLayoutProps) => {
  if (title && button) {
    return (
      <div className={`rounded-10 py-24 shadow-md bg-background-container ${className}`}>
        <div className="px-23 border-b-1 border-divider pb-16 flex justify-between items-center">
          <p className="text-primary-text font-600 text-16">
            {title}
          </p>
          {button}
        </div>
        <div className="grow h-full">
          {children}
        </div>
      </div>
    )
  }

  if (title) {
    return (
      <div className={`rounded-10 py-24 shadow-md bg-background-container ${className}`}>
        <div className="px-23 border-b-1 border-divider pb-16 flex justify-between items-center">
          <p className="text-primary-text font-600 text-16">
            {title}
          </p>
        </div>
        <div className="px-23 grow h-full">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-10 px-23 py-24 shadow-md bg-background-container ${className}`}>
      {children}
    </div>
  )
}

export default SectionLayout
