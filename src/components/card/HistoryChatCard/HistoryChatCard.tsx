'use client'

import { useMemo, useCallback, useState } from 'react'
import Image from 'next/image'

import { IHistoryChatCardProps } from './IHistoryChatCard'

import constants from '@/utils/constants'

import { isSameDay, isYesterday } from './utils'

import searchSVG from '../../icons/search.svg'
import checkSVG from '../../icons/icon-check.svg'
import closeSVG from '../../icons/close.svg'
import timeSVG from '../../icons/time-quarter.svg'
import trashSVG from '../../icons/trash.svg'

const HistoryChatCard = ({
  messages,
  handleOnConfirm,
  id,
  handleRetrieveChat,
}: IHistoryChatCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const firstMessage = useMemo(() => {
    if (!messages.length) {
      return {
        message: 'Esperando...',
        date: undefined,
      }
    }
    return messages[0]
  }, [messages])
  const latestMessage = useMemo(() =>  {
    if (!messages.length) {
      return undefined
    }
    return messages.at(-1) || messages[0]
  }, [messages])

  const title = useMemo(() => firstMessage.message.substring(0, constants.MAX_HISTORY_CHAT_CARD_LENGTH), [firstMessage])
  const remainingTime = useMemo(() => {
    if (!firstMessage.date || !latestMessage?.date) {
      return 'Esperando...'
    }
    if (messages.length <= 1) {
      return `Hoy, quedan 24 horas`
    }
    const currentTime = new Date()
    const startDate = firstMessage.date
    const endDate = latestMessage.date

    const diffMilliseconds = startDate.getTime() - endDate.getTime()
    const diffHours = diffMilliseconds / (1000 * 60 * 60)

    if (diffHours < 1) {
      return 'Ayer, queda menos de 1 hora'
    }

    if (isSameDay(startDate, currentTime)) {
      return `Hoy, quedan ${diffHours} horas`
    }
  
    if (isYesterday(startDate, currentTime)) {
      return `Ayer, quedan ${diffHours} horas`
    }
  
    return `Expiró`
  }, [firstMessage.date, latestMessage])

  const handleOnCancel = useCallback(() => {
    setIsSelected(false)
  }, [])

  const handleOnDelete = useCallback(() => {
    setIsSelected(true)
  }, [])

  const renderOptions = useCallback(() => {
    if (isSelected) {
      return (
        <div className="flex gap-15 justify-center align-center">
          <Image
            onClick={(e) => {
              e.stopPropagation()
              handleOnConfirm(id)
            }}
            className="cursor-pointer"
            priority
            src={checkSVG}
            alt="confirm"
          />
          <Image
            onClick={(e) => {
              e.stopPropagation()
              handleOnCancel()
            }}
            className="cursor-pointer"
            priority
            src={closeSVG}
            alt="cancel"
          />
        </div>
      )
    }

    return (
      <Image
        onClick={(e) => {
          e.stopPropagation()
          handleOnDelete()
        }}
        className="cursor-pointer"
        priority
        src={trashSVG}
        alt="delete"
      />
    )
  }, [handleOnCancel, handleOnConfirm, handleOnDelete, id, isSelected])

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        handleRetrieveChat(id)
      }}
      className={`flex w-full h-70 py-13 px-19 gap-13 rounded-4 mb-16 ${isSelected && 'bg-opacity-50 bg-background-selected'}`}>
      <div className="flex justify-center align-center">
        <div className="inline-block bg-primary-light rounded-full h-35 w-35 flex justify-center">
          <Image
            priority
            src={searchSVG}
            alt="search"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-primary-text font-500 text-16">{title}</p>
        <p className="text-secondary-text font-500 text-13">
          <Image
            className="inline mr-1"
            priority
            src={timeSVG}
            alt="remmaing time"
          />
          {remainingTime}
        </p>
      </div>
      <div className="flex justify-center align-center">
        {renderOptions()}
      </div>  
    </div>
  )
}

export default HistoryChatCard
