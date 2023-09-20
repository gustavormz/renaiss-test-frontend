import { IChatCompletionsErrorResponse, IChatCompletionsResponse } from '../../../api/IOpenAIAPI'
import { IAxiosError } from '../../../api/utils/axios'

import { FinishReasonTypes } from '../../../models/completion'

import { IError } from '../../reducer/appReducer'

interface IGetMessageFromCompletionResponseProps {
  completionResponse: IChatCompletionsResponse
}

interface IGetMessageErrorFromCompletionErrorResponse {
  completionErrorResponse: IChatCompletionsErrorResponse
}

interface IMessageResponse {
  message: string
  isContinueMessage: boolean
}

const getMessageFromCompletionResponse = ({
  completionResponse,
}: IGetMessageFromCompletionResponseProps): IMessageResponse => {
  const choice = completionResponse.data.choices[0]
  return {
    message: choice.message.content,
    isContinueMessage: choice.finish_reason === FinishReasonTypes.length,
  }
}

const getErrorFromCompletionErrorResponse = ({
  completionErrorResponse,
}: IGetMessageErrorFromCompletionErrorResponse): IError => {
  if (
    completionErrorResponse.response &&
    completionErrorResponse.response.data
  ) {
    const errorData = completionErrorResponse.response
      .data as IChatCompletionsErrorResponse
    return {
      message: errorData.message,
      type: errorData.type,
      status: errorData.status,
    }
  }
  const axiosError = completionErrorResponse as unknown as IAxiosError
  const error: IError = {
    message: axiosError.message,
    status: axiosError.code,
    type: 'DEFAULT',
  }
  return error
}

export {
  getMessageFromCompletionResponse,
  getErrorFromCompletionErrorResponse,
}
