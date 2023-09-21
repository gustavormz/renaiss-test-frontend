import Image from 'next/image'

import SectionLayout from '@/components/layouts/SectionLayout'
import BaseInputText from '@/components/inputText/BaseInputText'

import sendSVG from '../../icons/send.svg'

const SystemSection = () => (
  <SectionLayout>
    <h3 className="m-0 text-primary-text font-600 mb-10">Sistema</h3>
    <p className="m-0 text-secondary-text font-400 leading-25 mb-33">
      Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.
    </p>
    <BaseInputText
      icon={
        <Image
          priority
          src={sendSVG}
          alt="send" />
      } />
  </SectionLayout>
)

export default SystemSection