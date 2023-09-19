const OpenAIAPIBaseURL = process.env.OPEN_AI_BASE_URL ?? ''

const OpenAIAPIToken = process.env.OPEN_AI_API_TOKEN ?? ''

const endpoints = {
  completions: process.env.OPEN_AI_API_COMPLETIONS_ENDPOINT ?? '',
  models: process.env.OPEN_AI_API_MODELS_ENDPOINT ?? '',
}

const config = {
  OpenAIAPIBaseURL,
  OpenAIAPIToken,
  endpoints,
}

export default config
