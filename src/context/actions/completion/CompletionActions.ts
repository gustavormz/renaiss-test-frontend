'use client'

import { debounce } from 'lodash'

import OpenAIAPI from '../../../api/OpenAIAPI'

import { API_CALLS_DEBOUNCE_TIME } from '../constants'

import { ETypes as EAppTypes } from '../../reducer/appReducer'
import { ETypes as EMessagesTypes } from '../../reducer/messagesReducer'

import CompletionBuilder from '../../builders/completion'

import {
  ISendChatCompletition,
  ISendChatCompletitionError,
} from './ICompletionActions'

import {
  getErrorFromCompletionErrorResponse,
  getMessageFromCompletionResponse,
} from './utils'

const sendChatCompletionAction = async ({
  messages,
  messagesDispatch,
  appDispatch,
}: ISendChatCompletition) => {
  appDispatch({
    type: EAppTypes.SET_IS_FETCHING,
    payload: { isFetching: true },
  })

  const body = CompletionBuilder.buildChatCompletitionBody({ messages })
  const response = await OpenAIAPI.chatCompletitions({ body })

  const aiMessageResponse = getMessageFromCompletionResponse({
    completionResponse: response,
  })

  const aiMessageBuilt = CompletionBuilder.buildAIMessageFormated({
    message: aiMessageResponse.message,
  })

  messagesDispatch({
    type: EMessagesTypes.SET_MESSAGE_AI,
    payload: { messageParts: aiMessageBuilt },
  })

  messagesDispatch({
    type: EMessagesTypes.SET_SHOW_CONTINUE_MESSAGE_OPTION,
    payload: {
      showContinueMessageOption: aiMessageResponse.isContinueMessage,
    },
  })
}

const sendChatCompletionError = ({
  appDispatch,
  error,
}: ISendChatCompletitionError) => {
  const ierror = getErrorFromCompletionErrorResponse({
    completionErrorResponse: error,
  })

  appDispatch({
    type: EAppTypes.SET_ERROR,
    payload: {
      error: ierror,
    },
  })
}

const sendChatCompletion = debounce(
  async ({
    messages,
    messagesDispatch,
    appDispatch,
  }: ISendChatCompletition) => {
    try {
      await sendChatCompletionAction({
        appDispatch,
        messages,
        messagesDispatch,
      })
    } catch (error: any) {
      sendChatCompletionError({
        appDispatch,
        error,
      })
    } finally {
      appDispatch({
        type: EAppTypes.SET_IS_FETCHING,
        payload: { isFetching: false },
      })
    }
  },
  API_CALLS_DEBOUNCE_TIME,
)

const actions = {
  sendChatCompletion
}

export default actions
