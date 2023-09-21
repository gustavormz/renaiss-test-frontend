'use client'

import TypingAnimation from "@/components/typing/TypingMessage"

const TypingCard = () => (
  <div className="rounded-10 px-25 bg-background-container mb-20">
    <div className="py-20 flex items-center">
      <span className="text-ai-text font-600 text-16 mr-12">
        OdamaChat {' '}
      </span>
      <span className="text-ai-text font-600 text-16 mr-12">
        <TypingAnimation />
      </span>
    </div>
  </div>
)

export default TypingCard
