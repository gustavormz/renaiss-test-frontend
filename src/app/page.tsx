import { useCallback } from 'react'

import { AppContextProvider } from '@/context/store'
import Header from '@/components/header/Header'
import BaseLayout from '@/components/layouts/BaseLayout'
import SystemSection from '@/components/section/SystemSection'
import HistorySection from '@/components/section/HistorySection'
import ChatSection from '@/components/section/ChatSection'

const Home = () => {
  return (
    <AppContextProvider>
      <div className="h-full w-full flex flex-col bg-background overflow-y-auto">
        <Header />
        <BaseLayout
          leftContent={
            <div className="flex flex-col gap-22 grow">
              <SystemSection />
              <HistorySection />
            </div>
          }
          rightContent={
            <ChatSection />
          }
        />
      </div>
    </AppContextProvider>
  )
}

export default Home
