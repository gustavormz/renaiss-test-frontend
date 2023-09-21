'use client'

import { combineComponents } from '../utils'

import MessagesProvider from './messagesStore'
import AppProvider from './appStore'

const providers = [AppProvider, MessagesProvider]

const AppContextProvider = combineComponents(...providers)

export { AppContextProvider }
