import { Layout } from '@/components/Layout'
import { Notice, Task } from '@/types/types'
import { supabase } from '@/utils/supabase'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('getServerSideProps/ssg invoked')
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true })
  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true })
  return { props: { tasks, notices } }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => {
  const router = useRouter()
  return (
    <Layout title="SSR">
      <p className="mb-3 text-pink-500">SSR</p>
      <ul className="mb-3">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p className="text-lg font-extrabold">{task.title}</p>
            </li>
          )
        })}
      </ul>
      <ul className="mb-3">
        {notices.map((notice) => {
          return (
            <li key={notice.id}>
              <p className="text-lg font-extrabold">{notice.content}</p>
            </li>
          )
        })}
      </ul>
      <Link href="/ssg" className="my-3 text-xs" prefetch={false}>
        Link to ssg
      </Link>
      <Link href="/isr" className="my-3 text-xs" prefetch={false}>
        Link to isr
      </Link>
      <button className="mb-3 text-xs" onClick={() => router.push('/ssg')}>
        Route to ssg
      </button>
      <button className="mb-3 text-xs" onClick={() => router.push('/isr')}>
        Route to isr
      </button>
    </Layout>
  )
}

export default Ssr
