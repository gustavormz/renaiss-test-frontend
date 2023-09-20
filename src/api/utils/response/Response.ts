import {
  ERROR_RESPONSE_MAP_BY_TYPE,
  ERROR_TYPES,
  SUCCESS_RESPONSE_MAP_BY_TYPE,
  SUCCESS_TYPES,
  SuccessKeyType,
  ErrorKeyType,
} from './constants'

import {
  IBuildErrorResponse,
  IBuildSuccessResponse,
  IErrorResponse,
  ISuccessResponse,
} from './IResponse'

const getSuccessObjectByType = (type: string)  =>
  SUCCESS_RESPONSE_MAP_BY_TYPE[type as SuccessKeyType] ?? SUCCESS_RESPONSE_MAP_BY_TYPE[SUCCESS_TYPES.DEFAULT]

const getErrorObjectByType = (type: string)  =>
  ERROR_RESPONSE_MAP_BY_TYPE[type as ErrorKeyType] ?? ERROR_RESPONSE_MAP_BY_TYPE[ERROR_TYPES.DEFAULT]

const buildSuccessResponse = ({
  type,
  data,
}: IBuildSuccessResponse): ISuccessResponse => {
  const templateResponse = getSuccessObjectByType(type)
  if (data) {
    templateResponse.data = data
  }

  return templateResponse
}

const buildErrorResponse = ({
  message,
  type,
}: IBuildErrorResponse): IErrorResponse => {
  const templateResponse = getErrorObjectByType(type)
  if (message) {
    templateResponse.message = message
  }

  return templateResponse
}

const builders = {
  buildSuccessResponse,
  buildErrorResponse,
}

export default builders
