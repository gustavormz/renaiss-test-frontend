interface IGPTModelModalProps {
  models: string[]
  handleOnAccept?: (model: string) => void
  selectedModel: string
  handleOnChange?: (model: string) => void
  handleOnClose?: () => void
}

export type { IGPTModelModalProps }
