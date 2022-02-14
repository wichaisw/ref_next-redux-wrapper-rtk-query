import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";
import { BASE_URL } from "../../../configs/api-endpoints";
import { IImages } from "../../../interfaces/Images";
import { IInstrument } from "../../../interfaces/instrument";
import { buttonStyle } from "../../../utils/button-style";

const Product: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [ instrument, setInstrument ] = useState<IInstrument>();
  const { register: registerImage, handleSubmit: handleSubmitImage } = useForm<{productImage: FileList}>();

  useEffect(() => {
    if(!router.isReady) return ;

    fetchInstrument();
  }, [router.isReady])

  const fetchInstrument = async() => {
    const res = await fetch(`${BASE_URL}/instruments/${pid}`)
    const data = await res.json();
    setInstrument(data);
  }

  const onSubmitImage = handleSubmitImage(async (data: {productImage: FileList}) => {
    try {
      const imagesArray: IImages[] = await uploadImages(data.productImage);

      const res = await fetch(`${BASE_URL}/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imagesArray),
      })
    } catch(err) {
      console.log(err);
    }
  })

  const uploadImages = async(images: FileList) => {
    console.log('image uploading');
    const data: FormData = new FormData();
    const imagesArray: IImages[] = [];
    
    for(let i = 0; i < images.length; i++) {
      data.append('file', images[i]);
      data.append('upload_preset', 'music-inst');

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CNAME}/image/upload`, {
          method: 'POST',
          body: data,
        });
        const resData = await res.json();

        const productImages: IImages = {
          instrumentId: Number(pid),
          imageUrl: resData.secure_url,
        }

        imagesArray.push(productImages)
      } catch (err) {
        console.log('Upload error:', err);
      }
    }

    return imagesArray;
  }

  return(
    <Layout>
      <main className="flex space-justify-between space-x-2">
        <figure>
          <form onSubmit={onSubmitImage} className="flex flex-col space-y-2">
            <div>image</div>
            <div>// carousel </div>
            <input type="file" {...registerImage('productImage')} multiple />
            <Button style={buttonStyle.orange}>Upload</Button>
          </form>
        </figure>
        <div>
          <span>Name: {instrument?.name}</span><br />
          <span>Brand: {instrument?.brand} </span><br />
          <span>Price: {instrument?.price}</span><br />
          <span>Status: {instrument?.status}</span><br />
          <span>Info: {instrument?.info}</span><br />       
        </div>
      </main>
    </Layout>
  )
}

export default Product;