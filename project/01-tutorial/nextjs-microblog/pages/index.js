import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from "next/link"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout><span>ここに書いた内容がLayoutのchildrenとして渡される</span></Layout>
  )
}
