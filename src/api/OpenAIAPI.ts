import axios from 'axios'

import {
  IChatCompletionsProps,
  IChatCompletionsResponse,
} from './IOpenAIAPI'

import Config from './config'

class OpenAIAPI {
  private static baseApiUrl = Config.OpenAIAPIBaseURL
  private static endpoints = Config.endpoints

  static async chatCompletitions({
    body: chatCompletionsBody
  }: IChatCompletionsProps): Promise<IChatCompletionsResponse> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Config.OpenAIAPIToken}`,
    }
    const endpoint = this.endpoints.completions
    const url = `${this.baseApiUrl}/${endpoint}`
    return await axios.post(url, chatCompletionsBody, { headers })
  }

  static async getModels() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Config.OpenAIAPIToken}`,
    }
    const endpoint = this.endpoints.models
    const url = `${this.baseApiUrl}/${endpoint}`
    return await axios.get(url, { headers })
  }
}

export default OpenAIAPI
