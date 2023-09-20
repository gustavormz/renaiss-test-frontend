import { ISectionLayoutProps } from './ISectionLayout'

const SectionLayout = ({
  children,
  className = '',
  title
}: ISectionLayoutProps) => {
  if (title) {
    return (
      <div className={`rounded-10 py-24 shadow-md bg-background-container ${className}`}>
        <div className="px-23 border-b-1 border-divider pb-16">
          <p className="text-primary-text font-600 text-16">
            {title}
          </p>
        </div>
        <div className="px-23 grow">
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
