interface IAxiosError {
  message: string
  code: number
  data?: unknown
  name: any
  response: {
    status: number,
    data: {
      error: {
        message: string,
        type: string,
      }
    }
  }
  status: number
}

export type { IAxiosError }
