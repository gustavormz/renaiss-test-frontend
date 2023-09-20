import { useCallback } from 'react'

import Header from '@/components/header/Header'
import BaseLayout from '@/components/layouts/BaseLayout'
import SystemSection from '@/components/section/SystemSection'
import HistorySection from '@/components/section/HistorySection'

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col bg-background overflow-y-auto">
      <Header />
      <BaseLayout
        leftContent={
          <div className="flex flex-col gap-22 grow">
            <SystemSection />
            <HistorySection />
          </div>
        }
      />
    </div>
  )
}

export default Home
