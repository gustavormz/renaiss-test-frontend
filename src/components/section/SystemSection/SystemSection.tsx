'use client'

import { ChangeEventHandler, useCallback, useState } from 'react'
import Image from 'next/image'

import SectionLayout from '@/components/layouts/SectionLayout'
import BaseInputText from '@/components/inputText/BaseInputText'

import { useMessagesContext } from '@/context/store/messagesStore'
import { ETypes as EMessagesTypes } from '@/context/reducer/messagesReducer'

import sendSVG from '../../icons/send.svg'

const SystemSection = () => {
  const [systemPrompt, setSystemPrompt] = useState('')

  const { dispatch: messagesDispatch } = useMessagesContext()

  const handleOnSend = useCallback(() => {
    messagesDispatch({
      type: EMessagesTypes.SET_MESSAGE_SYSTEM,
      payload: { message: systemPrompt }
    })
  }, [systemPrompt])

  const handleOnInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setSystemPrompt(event.target.value);
  }, [])

  return (
    <SectionLayout>
      <h3 className="m-0 text-primary-text font-600 mb-10">Sistema</h3>
      <p className="m-0 text-secondary-text font-400 leading-25 mb-33">
        Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.
      </p>
      <BaseInputText
        placeholder='Insertar Prompt'
        onChange={handleOnInputChange}
        value={systemPrompt}
        onClick={handleOnSend}
        icon={
          <Image
            priority
            src={sendSVG}
            alt="send" />
        } />
    </SectionLayout>
  )
}

export default SystemSection