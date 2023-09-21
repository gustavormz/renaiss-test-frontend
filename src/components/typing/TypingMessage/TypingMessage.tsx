import { useState, useEffect } from 'react'

const TypingAnimation = () => {
  const [dots, setDots] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prevDots) => (prevDots >= 3 ? 1 : prevDots + 1))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <>{'\xb7'.repeat(dots)}</>
}

export default TypingAnimation