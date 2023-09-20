import { useCallback } from 'react'

import Header from "@/components/header/Header"
import BaseLayout from "@/components/layouts/BaseLayout"
import SystemSection from "@/components/section/SystemSection"

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col bg-background">
      <Header />
      <BaseLayout
        leftContent={
          <>
            <SystemSection />
          </>
        }
      />
    </div>
  )
}

export default Home
