'use client'

import { combineComponents } from '../utils'

import MessagesProvider from './messagesStore'
import AppProvider from './appStore'
import ChatProvider from './chatStore'

const providers = [AppProvider, MessagesProvider, ChatProvider]

const AppContextProvider = combineComponents(...providers)

export { AppContextProvider }
