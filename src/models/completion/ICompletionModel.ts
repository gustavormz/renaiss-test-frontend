const RoleTypes = {
  AI: 'assistant',
  USER: 'user',
  SYSTEM: 'system',
} as const

interface IChatCompletionMessage {
  role: (typeof RoleTypes)[keyof typeof RoleTypes]
  content: string
}

interface IChatCompletion {
  messages: IChatCompletionMessage[]
  model: string
}

export type {
  IChatCompletion,
  IChatCompletionMessage,
}

export { RoleTypes }
