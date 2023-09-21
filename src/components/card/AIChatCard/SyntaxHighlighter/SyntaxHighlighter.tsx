import SyntaxHighlighter from 'react-syntax-highlighter'
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { ISyntaxHighlighterProps } from './ISyntaxHighlighter'

const SyntaxHighlighterComponent = ({ codeString, language }: ISyntaxHighlighterProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={defaultStyle}
      customStyle={{ fontSize: 14 }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}

export default SyntaxHighlighterComponent