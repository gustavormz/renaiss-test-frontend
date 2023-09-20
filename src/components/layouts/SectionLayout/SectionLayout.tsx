import { ISectionLayoutProps } from './ISectionLayout'

const SectionLayout = ({
  children
}: ISectionLayoutProps) => (
  <div className="rounded-10 px-23 py-24 shadow-md bg-background-container">
    {children}
  </div>
)

export default SectionLayout
