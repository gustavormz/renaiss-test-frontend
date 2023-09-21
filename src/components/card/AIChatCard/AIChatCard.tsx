'use client'

import { useMemo, useCallback } from 'react'

import { IAIChatCardProps } from './IAIChatCard'

import { formatDateTime } from '@/utils/functions'

import SyntaxHighlighterComponent from './SyntaxHighlighter'

const AIChatCard = ({
  date,
  messageParts = [],
  sender,
}: IAIChatCardProps) => {
  const formattedDate = useMemo(() => formatDateTime(date), [date])

  const renderTextParts = useCallback(
    (textParts: string[], key: string) => (
      <p
        className="text-primary-text font-600 text-16 leading-25"
        key={key}
      >
        {textParts.map((textPart, textPartIndex) => {
          const textKey = `${textPart}${textPartIndex}`
          let fontWeight = 'normal'

          if (
            textPartIndex % 2 === 1 ||
            (textPart.startsWith('`') && textPart.endsWith('`'))
          ) {
            fontWeight = 'bold'
          }

          return (
            <span key={textKey} style={{ fontWeight }}>
              {textPart}
            </span>
          )
        })}
      </p>
    ),
    []
  )

  const renderMessageParts = useCallback(() => {
    const parts = messageParts.map((messagePart, index) => {
      const key = `${sender}-message-part-${index}-${date}`
      if (messagePart.isCode) {
        return (
          <div key={key} className="syntaxHighlighterContainer">
            <SyntaxHighlighterComponent
              language={messagePart.language}
              codeString={messagePart.text}
            />
          </div>
        )
      }

      const textParts = messagePart.text.split(/(".*?"|`.*?`)/g).filter(Boolean)
      return renderTextParts(textParts, key)
    })
    return parts
  }, [date, messageParts, renderTextParts, sender])

  return (
    <div className="rounded-10 px-25 bg-background-container mb-20">
      <div className="py-20 border-b-1 border-divider">
        <span className="text-ai-text font-600 text-16 mr-12">
          OdamaChat
        </span>
        <span className="text-secondary-text font-500 text-13">
          {formattedDate}
        </span>
      </div>
      <div className="py-20">
        {renderMessageParts()}
      </div>
    </div>
  )
}

export default AIChatCard
