'use client'

import { ChangeEventHandler, useCallback, useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import { useMessagesContext } from '@/context/store/messagesStore'
import { ETypes as ETypesMessage } from '@/context/reducer/messagesReducer'
import { useAppContext } from '@/context/store/appStore'
import ChatActions from '@/context/actions/completion/CompletionActions'

import SectionLayout from "@/components/layouts/SectionLayout"
import BaseButton from '@/components/button/BaseButton'
import BaseInputText from '@/components/inputText/BaseInputText'
import UserChatCard from '@/components/card/UserChatCard'
import AIChatCard from '@/components/card/AIChatCard'
import TypingCard from '@/components/card/TypingCard'

import { RoleTypes } from '@/models/completion'

import plusSVG from '../../icons/plus.svg'
import sendSVG from '../../icons/send.svg'

const ChatSection = () => {
  const scrollElementRef = useRef<HTMLElement>(null)
  const [userMessage, setUserMessage] = useState('')

  const { state: messagesState, dispatch: messagesDispatch } =
    useMessagesContext()
  const { state: appState, dispatch: appDispatch } = useAppContext()

  const { messages, lastMessageSendBy } = messagesState

  const scrollToElement = useCallback(() => {
    const element = scrollElementRef.current;
    if (element) {
      const scrollOptions: ScrollToOptions = {
        top: element.offsetTop - (window.innerHeight / 2),
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
  }, [])

  useEffect(() => {
    const callSendChatCompletion = async () => {
      if (messages.length && lastMessageSendBy === RoleTypes.USER) {
        ChatActions.sendChatCompletion({
          appDispatch,
          messagesDispatch,
          messages,
        })
      }
    }
    callSendChatCompletion()
  }, [appDispatch, lastMessageSendBy, messages, messagesDispatch])

  useEffect(() => {
    let timeoutReference: NodeJS.Timeout | undefined;

    if (messages.length) {
      timeoutReference = setTimeout(() => {
        scrollToElement();
      }, 1000);
    }

    return () => {
      if (timeoutReference) {
        clearTimeout(timeoutReference)
      }
    };
  }, [messages.length, scrollToElement])

  const renderChatCards = useCallback(() => {
    return messages.map((message, index) => {
      const key = `chat-${message.sender}-${index}`
      return message.sender === 'assistant' ?
        <AIChatCard key={key} {...message} /> : <UserChatCard key={key} {...message}/>
    })
  }, [messages])

  const handleOnSendMessage = useCallback(() => {
    messagesDispatch({
      type: ETypesMessage.SET_MESSAGE_USER,
      payload: { message: userMessage },
    })
    setUserMessage('')
  }, [messagesDispatch, userMessage])

  const handleOnInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setUserMessage(event.target.value);
  }, [])

  return (
    <SectionLayout
      className="grow flex flex-col"
      title="Odama Chat"
      button={
        <BaseButton
          className="px-20"
          type="secondary"
          text="Nueva Búsqueda"
          icon={
            <Image
              className="cursor-pointer"
              priority
              src={plusSVG}
              alt="new-search"
            />
          }/>
      }>
      <div className="h-full flex flex-col">
        <div className="grow bg-background px-25 py-25" ref={scrollElementRef.current}>
          {renderChatCards()}
          {appState.isFetching && (
            <TypingCard />
          )}
        </div>
        <div className="px-23 pt-23">
          <BaseInputText
            value={userMessage}
            onChange={handleOnInputChange}
            onClick={handleOnSendMessage}
            icon={
              <Image
                priority
                src={sendSVG}
                alt="send" />
            } />
        </div>
      </div>
    </SectionLayout>
  )
}

export default ChatSection
