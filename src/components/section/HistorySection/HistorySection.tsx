'use client'

import { useCallback } from 'react'

import { useChatContext } from '@/context/store/chatStore'

import SectionLayout from '@/components/layouts/SectionLayout'
import HistoryChatCard from '@/components/card/HistoryChatCard'
import { IChat } from '@/models/chat'

const HistorySection = () => {
  const { state: chatState, dispatch: chatDispatch } = useChatContext()

  const { chats } = chatState

  const renderChats = useCallback(() => {
    return (
      <div className="overflow-y-auto">
          {chats.map(chat => <HistoryChatCard handleOnConfirm={() => {}} key={`history-card-${chat.id}`} {...chat} />)}
      </div>
    )
  }, [chats])

  return (
    <SectionLayout className="h-full" title='Historial de Búsquedas'>
      <div className="pt-18">
        {renderChats()}
      </div>
    </SectionLayout>
  )
}

export default HistorySection
