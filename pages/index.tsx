import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import { 
  getAllInstrument, 
  useGetAllInstrumentQuery,
  getRunningOperationPromises
} from '../services/instruments';
import { wrapper } from '../app/store';
import { IInstrument } from '../interfaces/instrument';
import { ParsedUrlQuery } from 'querystring';
import { AppStore, RootState, AppDispatch } from '../app/store';
import { useEffect } from 'react';



interface Props {
  [key: string]: IInstrument[]
}
interface Params extends ParsedUrlQuery{
  id: string
}



const Home: NextPage<Props> = ({ instruments }: Props) => {

  // const { data, error, isLoading } = useGetAllInstrumentQuery();

  // useEffect(() => {
  //   console.log(instruments);
  // }, [])

  return (
    <Layout>
      <span>{instruments[0].name}</span><br />
      <span>{instruments[0].price}</span><br />
      <span>{instruments[0].info}</span><br />
      {/* {(() => {
        if(error) return <>{error}</>
        if(isLoading) return <>{isLoading}</>
        if(data) {
          return (
            <main>
              {data.map((instrument, index) => {
                // TODO product card
                return <div key={instrument.id}>
                  {instrument.name}
                  {instrument.type}
                  {instrument.brand}
                  {instrument.price}
                  {instrument.info}
                </div>
              })}
            </main>
          )
        }
      })() } */}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<Props, Params> = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getAllInstrument.initiate())

    const res: any[] = await Promise.all(getRunningOperationPromises());

    const instruments: IInstrument[] = res[0].data
    
    return {
      props: {
        instruments
      },
    }
  }

)

export default Home
