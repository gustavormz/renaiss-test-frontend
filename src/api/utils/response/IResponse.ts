interface ISuccessResponse {
  data?: any
  status: number
  message: string
  type: string
}

interface IErrorResponse {
  status: number
  message: string
  type: string
}

interface IBuildSuccessResponse {
  data?: any
  type: string
}

interface IBuildErrorResponse {
  message?: string
  type: string
}

export type {
  ISuccessResponse,
  IErrorResponse,
  IBuildErrorResponse,
  IBuildSuccessResponse,
}
