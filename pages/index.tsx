import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='h-full'>
        <div>BOdy</div>
      </div>
    </Layout>
  )
}

export default Home
