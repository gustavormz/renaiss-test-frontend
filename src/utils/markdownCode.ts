interface IBlock {
  isCode: boolean
  text: string
  language: string
}

const detectIBlocksOfTextAndCode = (markdownCode: string): IBlock[] => {
  const codeBlocks = markdownCode.split('```')
  const IBlocks: IBlock[] = []

  for (let i = 0; i < codeBlocks.length; i++) {
    const block = codeBlocks[i]
    const isCode = i % 2 !== 0
    const lines = block.split('\n')

    let currentIBlock: IBlock = { isCode, text: '', language: '' }

    for (let j = 0; j < lines.length; j++) {
      const line = lines[j]
      const isLastLine = j === lines.length - 1

      if (isCode && j === 0) {
        currentIBlock.language = line
        continue
      }

      if (!isCode && line.trim() === '' && currentIBlock.text.trim() === '') {
        continue
      }

      currentIBlock.text += line + (isLastLine ? '' : '\n')

      if (!isCode && (line === '' || isLastLine)) {
        IBlocks.push(currentIBlock)
        currentIBlock = { isCode: false, text: '', language: '' }
      }
    }

    if (isCode) {
      IBlocks.push(currentIBlock)
    }
  }

  for (let i = 0; i < IBlocks.length; i++) {
    IBlocks[i].text = IBlocks[i].text.replace(/\n{2,}/g, '\n')
    if (IBlocks[i].isCode) {
      IBlocks[i].text = IBlocks[i].text.replace(/\n$/, '')
    }
  }

  return IBlocks
}

const markdownCode = {
  detectIBlocksOfTextAndCode,
}

export default markdownCode

export type { IBlock }
