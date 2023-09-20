const SUCCESS_TYPES = {
  DEFAULT: 'DEFAULT',
  GENERATE_COMPLETION: 'GENERATE_COMPLETION',
} as const

const ERROR_TYPES = {
  DEFAULT: 'DEFAULT',
  VALIDATION_PAYLOAD: 'VALIDATION_PAYLOAD',
  GENERATE_COMPLETION: 'GENERATE_COMPLETION',
  SAVING_CHAT: 'SAVING_CHAT',
  UPDATING_CHAT: 'UPDATING_CHAT',
} as const

type SuccessKeyType = keyof typeof SUCCESS_TYPES;
type ErrorKeyType = keyof typeof ERROR_TYPES;

interface ISuccessResponseMap {
  status: number
  message: string
  type: SuccessKeyType
  data?: any
}

interface IErrorResponseMap {
  status: number
  message: string
  type: ErrorKeyType
}

type TErrorResponseMapType = {
  [key in ErrorKeyType]: IErrorResponseMap
}

type TSuccessResponseMapType = {
  [key in SuccessKeyType]: ISuccessResponseMap
}

const SUCCESS_RESPONSE_MAP_BY_TYPE: TSuccessResponseMapType = {
  [SUCCESS_TYPES.DEFAULT]: {
    status: 200,
    message: 'Operation executed correctly!',
    type: SUCCESS_TYPES.DEFAULT,
  },
  [SUCCESS_TYPES.GENERATE_COMPLETION]: {
    status: 201,
    message: 'Completion generated correctly!',
    type: SUCCESS_TYPES.GENERATE_COMPLETION,
  }
} as const

const ERROR_RESPONSE_MAP_BY_TYPE: TErrorResponseMapType = {
  [ERROR_TYPES.DEFAULT]: {
    status: 400,
    message: 'Error processing your request!',
    type: ERROR_TYPES.DEFAULT,
  },
  [ERROR_TYPES.VALIDATION_PAYLOAD]: {
    status: 400,
    message: 'Error validating payload!',
    type: ERROR_TYPES.VALIDATION_PAYLOAD,
  },
  [ERROR_TYPES.GENERATE_COMPLETION]: {
    status: 400,
    message: 'Error generating completion!',
    type: ERROR_TYPES.GENERATE_COMPLETION,
  },
  [ERROR_TYPES.SAVING_CHAT]: {
    status: 400,
    message: 'Error saving chat in database!',
    type: ERROR_TYPES.SAVING_CHAT,
  },
  [ERROR_TYPES.UPDATING_CHAT]: {
    status: 400,
    message: 'Error updating chat in database!',
    type: ERROR_TYPES.UPDATING_CHAT,
  },
} as const

export {
  SUCCESS_RESPONSE_MAP_BY_TYPE,
  ERROR_RESPONSE_MAP_BY_TYPE,
  ERROR_TYPES,
  SUCCESS_TYPES,
}

export type {
  ISuccessResponseMap,
  IErrorResponseMap,
  SuccessKeyType,
  ErrorKeyType,
}
