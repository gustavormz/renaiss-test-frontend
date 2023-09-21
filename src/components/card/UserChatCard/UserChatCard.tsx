import { useMemo } from 'react'

import { IUserChatCard } from './IUserChatCard'

import { formatDateTime } from '@/utils/functions'

const UserChatCard = ({
  sender,
  date,
  message,
}: IUserChatCard) => {
  const formattedDate = useMemo(() => formatDateTime(date), [date])

  return (
    <div className="rounded-10 px-25 bg-background-container mb-20">
      <div className="py-20 border-b-1 border-divider">
        <span className="text-user-text font-600 text-16 mr-12">
          {sender}
        </span>
        <span className="text-secondary-text text-13">
          {formattedDate}
        </span>
      </div>
      <div className="py-20">
        <p className="text-primary-text text-16 leading-25">
          {message}
        </p>
      </div>
    </div>
  )
}

export default UserChatCard
