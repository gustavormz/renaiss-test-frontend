const generateUniqueId = () => {
  return `chat-${Date.now().toString()}`
}

export { generateUniqueId }
