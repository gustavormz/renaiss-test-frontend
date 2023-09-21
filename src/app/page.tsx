/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback } from 'react'

import { AppContextProvider } from '@/context/store'
import { useAppContext } from '@/context/store/appStore'
import { ETypes } from '@/context/reducer/appReducer'
import Header from '@/components/header/Header'
import BaseLayout from '@/components/layouts/BaseLayout'
import SystemSection from '@/components/section/SystemSection'
import HistorySection from '@/components/section/HistorySection'
import ChatSection from '@/components/section/ChatSection'

const Home = () => {
  const { state, dispatch } = useAppContext()

  const { openPanel } = state

  const handleCustomClick = useCallback(() => {
    
  }, [])
  
  const handlePanelClick = useCallback(() => {
    dispatch({
      type: ETypes.SET_OPEN_PANEL,
      payload: { openPanel: !openPanel }
    })
  }, [openPanel])

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-y-auto">
        <Header handleCustomClick={handleCustomClick} handlePanelClick={handlePanelClick} />
        <BaseLayout
          hiddeLeft={!openPanel}
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
  )
}

const Page = () => (
  <AppContextProvider>
    <Home />
  </AppContextProvider>
)

export default Page
