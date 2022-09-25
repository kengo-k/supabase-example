import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'
import { Notice, Task } from '../types/types'
import { supabase } from '../utils/supabase'

// ビルド時に実行される処理。
// 静的ページを構築するためのデータを取得する
// getStaticPropsという名前で関数を定義することでNextから自動的に呼び出される(はず)
//
// yarn buildでビルドを実行するとルートディレクトリ下にある.nextディレクトリに
// 静的なHTMLが生成されていることを確認できる。
//
// yarn build後にyarn startすることでproduction環境の動作を確認できる。
// ssgページに複数回アクセスしても何も出力されないことを確認できる
// (console.log処理はビルド時に一度だけ行われているため)
// ※開発時(yarn dev)は利便性のためにSSRと同じ挙動をする
export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps/ssg invoked')
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true })

  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true })
  // 戻りの値はpropsというキーを持つオブジェクトでなければならない
  return { props: { tasks, notices } }
}

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

// getStaticPropsが返した値が引数のpropsとなって返される
const Ssg: NextPage<StaticProps> = ({ tasks, notices }) => {
  return (
    <Layout title="SSG">
      <p className="mb-3 text-blue-500">SSG</p>
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
    </Layout>
  )
}
export default Ssg
