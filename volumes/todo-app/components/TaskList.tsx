import { FC } from 'react'

import { Spinner } from '@components/Spinner'
import { TaskItem } from '@components/TaskItem'
import { useQueryTasks } from '@hooks/useQueryTasks'

export const TaskList: FC = () => {
  const { data: tasks, status } = useQueryTasks()
  if (status === 'loading') {
    return <Spinner />
  }
  if (status === 'error') {
    return <p>{'Error'}</p>
  }
  return (
    <ul className="my-2">
      {tasks?.map((task) => {
        return <TaskItem key={task.id} id={task.id} title={task.title} />
      })}
    </ul>
  )
}
