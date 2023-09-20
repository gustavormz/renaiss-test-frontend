import Image from 'next/image';

import { IHeaderProps } from './IHeader'

import BaseButton from '../button/BaseButton'

import chevronSVG from '../icons/chevron-left.svg'
import sidebarSVG from '../icons/sidebar.svg'
import settingSVG from '../icons/settings.svg'

const Header = ({

}: IHeaderProps) => (
  <header className="bg-primary h-93 justify-between flex pt-25 pb-23 pl-62 pr-47">
    <div className="flex gap-13">
      <BaseButton
        icon={
          <Image
            priority
            src={chevronSVG}
            alt="back"
          />}
          text={'Atrás'}
          className={'pr-20'}/>
      <BaseButton
        icon={
          <Image
            priority
            src={sidebarSVG}
            alt="sidebar"
          />}/>
    </div>
    <BaseButton
      icon={
        <Image
          priority
          src={settingSVG}
          alt="settings"
        />}/>
  </header>
)

export default Header
