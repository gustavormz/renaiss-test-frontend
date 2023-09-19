import { IChatCompletion } from '../models/completion/ICompletionModel'

interface IChatCompletionsResponse {
  config: {
    adapter: string[]
    data: string
    maxBodyLength: number
    maxContentLength: number
    method: string
    timeout: number
    transitional: {
      clarifyTimeoutError: boolean
      forcedJSONParsing: boolean
      silentJSONParsing: boolean
    }
    url: string
  }
  data: {
    choices: {
      message: {
        role: string
        content: string
      }
      finish_reason: string
      index: number
    }[]
    created: number
    id: string
    model: string
    object: string
    usage: {
      completion_tokens: number
      prompt_tokens: number
      total_tokens: number
    }
  }
  status: number
  statusText?: string
}

interface IChatCompletionsErrorResponse {
  config: {
    adapter: string[]
    data: string
    env: Record<string, any>
    headers: Record<string, string>
    maxBodyLength: number
    maxContentLength: number
    method: string
    timeout: number
    transformRequest: unknown[]
    transformResponse: unknown[]
    transitional: {
      clarifyTimeoutError: boolean
      forcedJSONParsing: boolean
      silentJSONParsing: boolean
    }
    url: string
    validateStatus: unknown
    xsrfCookieName: string
    xsrfHeaderName: string
  }
  data: {
    error: {
      code?: number
      message: string
      param?: string
      type: string
    }
  }
  headers: {
    'alt-svc': string
    'cf-cache-status': string
    'cf-ray': string
    'content-length': string
    'content-type': string
    date: string
    server: string
    'strict-transport-security': string
    vary: string
    'x-request-id': string
  }
  request: {
    DONE: number
    HEADERS_RECEIVED: number
    LOADING: number
    OPENED: number
    UNSENT: number
    _aborted: boolean
    _cachedResponse: undefined
    _hasError: boolean
    _headers: Record<string, string>
    _incrementalEvents: boolean
    _lowerCaseResponseHeaders: Record<string, string>
    _method: string
    _perfKey: string
    _performanceLogger: {
      _closed: boolean
      _extras: Record<string, any>
      _pointExtras: Record<string, any>
      _points: Record<string, number>
      _timespans: Record<string, any>
    }
    _requestId: null
    _response: string
    _responseType: string
    _sent: boolean
    _subscriptions: any[]
    _timedOut: boolean
    _trackingName: string
    _url: string
    readyState: number
    responseHeaders: Record<string, string>
    responseURL: string
    status: number
    timeout: number
    upload: Record<string, any>
    withCredentials: boolean
  }
  status: number
  statusText: undefined
}

interface IChatCompletionsProps {
  chatCompletionsBody: IChatCompletion
}

export type {
  IChatCompletionsErrorResponse,
  IChatCompletionsResponse,
  IChatCompletionsProps,
}
