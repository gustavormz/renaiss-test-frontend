/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback } from 'react'

import { useChatContext } from '@/context/store/chatStore'
import { useMessagesContext } from '@/context/store/messagesStore'
import ChatActions from '@/context/actions/chat/ChatActions'

import SectionLayout from '@/components/layouts/SectionLayout'
import HistoryChatCard from '@/components/card/HistoryChatCard'

const HistorySection = () => {
  const { state: chatState, dispatch: chatDispatch } = useChatContext()
  const { dispatch: messagesDispatch } = useMessagesContext()

  const { chats, activeChat } = chatState

  const handleOnDelete = useCallback((id: string) => {
    ChatActions.deleteChat({
      chatDispatch,
      chatId: id,
      chats,
      activeChat,
      messagesDispatch
    })
  }, [activeChat, chats])

  const handleRetrieveChat = useCallback((id: string) => {
    ChatActions.setChat({
      chatDispatch,
      chatId: id,
      chats,
      messagesDispatch
    })
  }, [chats])

  const renderChats = useCallback(() => {
    return (
      <div className="overflow-y-auto">
          {chats.map(chat =>
            <HistoryChatCard
              handleRetrieveChat={handleRetrieveChat}
              handleOnConfirm={handleOnDelete}
              key={`history-card-${chat.id}`}
              {...chat} />)}
      </div>
    )
  }, [chats, handleOnDelete, handleRetrieveChat])

  return (
    <SectionLayout className="h-full" title='Historial de Búsquedas'>
      <div className="pt-18">
        {renderChats()}
      </div>
    </SectionLayout>
  )
}

export default HistorySection
