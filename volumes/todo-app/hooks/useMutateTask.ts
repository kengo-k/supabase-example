import { useMutation, useQueryClient } from 'react-query'

import useStore from '@store'
import { supabase } from '@utils/supabase'
import { EditedTask, Task } from '@utils/types'

export const useMutateTask = () => {
  const queryClient = useQueryClient()
  const reset = useStore((state) => state.resetEditedTask)
  const createTaskMutation = useMutation(
    async (task: Omit<Task, 'id' | 'created_at'>) => {
      const { data, error } = await supabase.from('todos').insert(task)
      if (error) {
        throw new Error(error.message)
      }
      return data
    },
    {
      onSuccess: (res) => {
        const prevTodos = queryClient.getQueryData<Task[]>(['todos'])
        if (prevTodos) {
          queryClient.setQueryData(['todos'], [...prevTodos, res[0]])
        }
        reset()
      },
      onError: (err: Error) => {
        alert(err.message)
        reset()
      },
    }
  )
  const updateTaskMutation = useMutation(
    async (task: EditedTask) => {
      const { data, error } = await supabase
        .from('todos')
        .update({ title: task.title })
        .eq('id', task.id)
      if (error) {
        throw new Error(error.message)
      }
      return data
    },
    {
      onSuccess: (res, args) => {
        const prevTodos = queryClient.getQueryData<Task[]>(['todos'])
        if (prevTodos) {
          queryClient.setQueryData(
            ['todos'],
            prevTodos.map((task) => (task.id === args.id ? res[0] : task))
          )
        }
        reset()
      },
      onError: (err: Error) => {
        alert(err.message)
        reset()
      },
    }
  )
  const deleteTaskMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase.from('todos').delete().eq('id', id)
      if (error) {
        throw new Error(error.message)
      }
      return data
    },
    {
      onSuccess: (_, args) => {
        const prevTodos = queryClient.getQueryData<Task[]>(['todos'])
        if (prevTodos) {
          queryClient.setQueryData(
            ['todos'],
            prevTodos.filter((task) => task.id !== args)
          )
        }
        reset()
      },
      onError: (err: Error) => {
        alert(err.message)
        reset()
      },
    }
  )
  return { createTaskMutation, updateTaskMutation, deleteTaskMutation }
}
