const OpenAIAPIBaseURL = process.env.NEXT_PUBLIC_OPEN_AI_BASE_URL ?? ''

const OpenAIAPIToken = process.env.NEXT_PUBLIC_OPEN_AI_API_TOKEN ?? ''

const endpoints = {
  completions: process.env.NEXT_PUBLIC_OPEN_AI_API_COMPLETIONS_ENDPOINT ?? '',
  models: process.env.NEXT_PUBLIC_OPEN_AI_API_MODELS_ENDPOINT ?? '',
}

const config = {
  OpenAIAPIBaseURL,
  OpenAIAPIToken,
  endpoints,
}

export default config
