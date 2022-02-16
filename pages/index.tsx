import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import { useGetAllInstrumentQuery } from '../services/instruments';

const Home: NextPage = () => {

  const { data, error, isLoading } = useGetAllInstrumentQuery();

  return (
    <Layout>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <main>
          {data.map((instrument, id) => {
            // TODO product card
            return <div>
              {instrument.name}
              {instrument.type}
              {instrument.brand}
              {instrument.price}
              {instrument.info}
            </div>
          })}
        </main>
      ) : null}
        
    </Layout>
  )
}

export default Home
