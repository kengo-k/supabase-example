import useStore from '../store'
import { EditedNotice, Notice } from '../types/types'
import { supabase } from '../utils/supabase'
import { useQueryClient, useMutation } from 'react-query'

export const useMutateNotice = () => {
  const queryClient = useQueryClient()
  const reset = useStore((state) => state.resetEditedNotice)
  const createNoticeMutation = useMutation(
    async (notice: Omit<Notice, 'id' | 'created_at'>) => {
      const { data, error } = await supabase.from('notices').insert(notice)
      if (error) {
        throw new Error(error.message)
      }
      return data
    },
    {
      onSuccess: (res) => {
        const prevNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (prevNotices) {
          queryClient.setQueryData(['notices'], [...prevNotices, res[0]])
        }
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )
  const updateNoticeMutation = useMutation(
    async (notice: EditedNotice) => {
      const { data, error } = await supabase
        .from('notices')
        .update({ content: notice.content })
        .eq('id', notice.id)
      if (error) {
        throw new Error(error.message)
      }
      return data
    },
    {
      onSuccess: (res, args) => {
        const prevNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (prevNotices) {
          queryClient.setQueryData(
            ['notices'],
            prevNotices.map((notice) =>
              notice.id === args.id ? res[0] : notice
            )
          )
        }
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )
  const deleteNoticeMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase
        .from('notices')
        .delete()
        .eq('id', id)
      if (error) {
        throw new Error(error.message)
      }
      return data
    },
    {
      onSuccess: (_, values) => {
        const prevNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (prevNotices) {
          queryClient.setQueryData(
            ['notices'],
            prevNotices.filter((notice) => notice.id === values)
          )
        }
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    }
  )
  return { createNoticeMutation, updateNoticeMutation, deleteNoticeMutation }
}
