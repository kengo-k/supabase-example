import { FC } from 'react'

import { NoticeItem } from '@components/NoticeItem'
import { Spinner } from '@components/Spinner'
import { useQueryNotices } from '@hooks/useQueryNotices'

export const NoticeList: FC = () => {
  const { data: notices, status } = useQueryNotices()
  if (status === 'loading') {
    return <Spinner />
  }
  if (status === 'error') {
    return <p>{'Error'}</p>
  }
  return (
    <ul className="my-2">
      {notices?.map((notice) => {
        return (
          <NoticeItem
            key={notice.id}
            id={notice.id}
            content={notice.content}
            user_id={notice.user_id}
          />
        )
      })}
    </ul>
  )
}
