/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, useEffect, useState } from 'react'

import OpenAIAPI from '@/api/OpenAIAPI'

import { AppContextProvider } from '@/context/store'
import { useAppContext } from '@/context/store/appStore'
import { ETypes } from '@/context/reducer/appReducer'
import { useChatContext } from '@/context/store/chatStore'
import { ETypes as EChatTypes } from '@/context/reducer/chatReducer'

import Header from '@/components/header/Header'
import BaseLayout from '@/components/layouts/BaseLayout'
import SystemSection from '@/components/section/SystemSection'
import HistorySection from '@/components/section/HistorySection'
import ChatSection from '@/components/section/ChatSection'
import GPTModelModal from '@/components/modal/GPTModelModal'

interface IModel {
  id: string
}

const Home = () => {
  const [openAIModels, setOpenAIModels] = useState<string[]>([])
  const [selectedModel, setSelectedModel] = useState<string>('')
  const [openModal, setOpenModal] = useState(false)

  const { state, dispatch } = useAppContext()
  const { state: chatState, dispatch: chatDispatch } = useChatContext()

  const { openPanel } = state

  useEffect(() => {
    const getModelsFromRequest = (models: IModel[] = []) => {
      return models.map((model) => model.id)
    }
    const filterModels = (models: string[] = []) => models.filter((model) => model.includes('gpt'))
    const fetchModels = async () => {
      const models = await OpenAIAPI.getModels()
      const formatedModels: string[] = getModelsFromRequest(models.data.data)
      const filteredModels = filterModels(formatedModels)
      setOpenAIModels(filteredModels)
      setSelectedModel(filteredModels[0])
    }

    fetchModels()
  }, [])

  const handleCustomClick = useCallback(() => {
    setOpenModal(true)
  }, [])
  
  const handlePanelClick = useCallback(() => {
    dispatch({
      type: ETypes.SET_OPEN_PANEL,
      payload: { openPanel: !openPanel }
    })
  }, [openPanel])

  const handleOnAcceptModal = useCallback(() => {
    chatDispatch({
      type: EChatTypes.UPDATE_MODEL_CHAT,
      payload: { model: selectedModel }
    })
    setOpenModal(false)
  }, [selectedModel])

  const handleOnChangeModel = useCallback((model: string) => {
    setSelectedModel(model)
  }, [])

  const handleOnCloseModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-y-auto">
      {openModal && (
        <GPTModelModal
          models={openAIModels}
          selectedModel={selectedModel}
          handleOnAccept={handleOnAcceptModal}
          handleOnChange={handleOnChangeModel}
          handleOnClose={handleOnCloseModal}/>
      )}
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
