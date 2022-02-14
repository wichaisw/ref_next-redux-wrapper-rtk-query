import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { BASE_URL } from "../../../configs/api-endpoints";
import { IInstrument } from "../../../interfaces/instrument";

const Product: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [ instrument, setInstrument ] = useState<IInstrument>();

  useEffect(() => {
    if(!router.isReady) return ;

    fetchInstrument();
  }, [router.isReady])

  const fetchInstrument = async() => {
    const res = await fetch(`${BASE_URL}/instruments/${pid}`)
    const data = await res.json();
    setInstrument(data);
  }

  return(
    <Layout>
      <div>product: {pid}</div>
      <main>
        <span>Name: {instrument?.name}</span><br />
        <span>Brand: {instrument?.brand} </span><br />
        <span>Price: {instrument?.price}</span><br />
        <span>Status: {instrument?.status}</span><br />
        <span>Info: {instrument?.info}</span><br />       
      </main>
    </Layout>
  )
}

export default Product;