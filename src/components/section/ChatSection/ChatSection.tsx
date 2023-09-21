/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ChangeEventHandler, useCallback, useState, useEffect } from 'react'
import Image from 'next/image'

import { useMessagesContext } from '@/context/store/messagesStore'
import { useAppContext } from '@/context/store/appStore'
import { useChatContext } from '@/context/store/chatStore'
import { ETypes as ETypesMessage } from '@/context/reducer/messagesReducer'
import CompletionActions from '@/context/actions/completion/CompletionActions'
import ChatActions from '@/context/actions/chat/ChatActions'

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
  const [userMessage, setUserMessage] = useState('')

  const { state: messagesState, dispatch: messagesDispatch } =
    useMessagesContext()
  const { state: appState, dispatch: appDispatch } = useAppContext()
  const { state: chatState, dispatch: chatDispatch } = useChatContext()

  const { messages, lastMessageSendBy } = messagesState
  const { chats, activeChat, currentModel } = chatState

  useEffect(() => {
    const callSendChatCompletion = async () => {
      if (messages.length && lastMessageSendBy === RoleTypes.USER) {
        CompletionActions.sendChatCompletion({
          appDispatch,
          messagesDispatch,
          messages,
          openAIModel: activeChat?.openAIModel
        })
      } else if (messages.length) {
        ChatActions.updateChat({
          chatDispatch,
          chatId: activeChat?.id,
          chats,
          messages,
        })
      }
    }
    callSendChatCompletion()
  }, [lastMessageSendBy, messages, activeChat])

  const renderChatCards = useCallback(() => {
    return messages.map((message, index) => {
      const key = `chat-${message.sender}-${index}`
      if (message.sender === RoleTypes.AI) {
        return <AIChatCard key={key} {...message} />
      }
      if (message.sender === RoleTypes.USER) {
        return <UserChatCard key={key} {...message}/>
      }
    })
  }, [messages])

  const handleOnSendMessage = useCallback(() => {
    messagesDispatch({
      type: ETypesMessage.SET_MESSAGE_USER,
      payload: { message: userMessage },
    })
    setUserMessage('')
    if (!activeChat) {
      ChatActions.newChat({
        chatDispatch,
        messagesDispatch,
        openAIModel: currentModel
      })
    }
  }, [userMessage, activeChat])

  const handleOnInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setUserMessage(event.target.value);
  }, [])

  const handleNewChatClick = useCallback(() => {
    ChatActions.newChat({
      chatDispatch,
      messagesDispatch,
      reset: true,
      openAIModel: currentModel,
    })
  }, [])

  return (
    <SectionLayout
      className="grow flex flex-col"
      title="Odama Chat"
      button={
        <BaseButton
          onClick={handleNewChatClick}
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
        <div className="grow bg-background px-25 py-25">
          {renderChatCards()}
          {appState.isFetching && (
            <TypingCard />
          )}
        </div>
        <div className="px-23 pt-23">
          <BaseInputText
            placeholder='Insertar Prompt'
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
