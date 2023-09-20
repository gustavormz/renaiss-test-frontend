import { useCallback } from 'react'

import SectionLayout from '@/components/layouts/SectionLayout'
import HistoryChatCard from '@/components/card/HistoryChatCard'
import { IChat } from '@/models/chat'

const chats: IChat[] = [
  {
    messages: [
      { message: 'hlle', date: new Date(), receiver: '', sender: 'user' }
    ],
    id: '1',
    openAIModel: 'new'
  },
  {
    messages: [
      { message: 'hlle', date: new Date(), receiver: '', sender: 'user' }
    ],
    id: '1',
    openAIModel: 'new'
  },
  {
    messages: [
      { message: 'hlle', date: new Date(), receiver: '', sender: 'user' }
    ],
    id: '1',
    openAIModel: 'new'
  },
  {
    messages: [
      { message: 'hlle', date: new Date(), receiver: '', sender: 'user' }
    ],
    id: '1',
    openAIModel: 'new'
  },
  {
    messages: [
      { message: 'hlle', date: new Date(), receiver: '', sender: 'user' }
    ],
    id: '1',
    openAIModel: 'new'
  },
  {
    messages: [
      { message: 'hlle', date: new Date(), receiver: '', sender: 'user' }
    ],
    id: '1',
    openAIModel: 'new'
  }
]

const HistorySection = () => {
  

  const renderChats = useCallback(() => {
    return (
      <div className="overflow-y-auto">
          {chats.map(chat => <HistoryChatCard key={`history-card-${chat.id}`} {...chat} />)}
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
