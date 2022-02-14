import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import cloudinary from 'cloudinary';
import { IImages } from "../../interfaces/Images";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case 'GET':
      break;
    case 'POST':
      return createImages();
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // POST /api/images
  async function createImages() {
    console.log('createImages')
    const images: IImages[] = req.body;

    try {
      const productImage = await Promise.all(
        images.map(async (image: IImages) => {
          await prisma.productImage.create({
            data: {
              instrumentId: image.instrumentId,
              imageUrl: image.imageUrl
            }
          })
        })
      ) 
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

// const uploadHelper = (images: File[]) => {
//   const imagesUrl: string[] = [];
//   console.log(images[0])

//   images.map(async (file: File) => {
//     let imageURI:string| void = getBase64(file);
//     console.log('imageURI', imageURI)

//     if(!imageURI) throw new Error('Failed to convert an image file');

//     const res = await cloudinary.v2.uploader.upload(imageURI, 
//       { 
//         resource_type: "image", 
//         folder: 'music-instruments/',
//         public_id: file.name,
//         chunk_size: 6_000_000, // 6MB
//       },

//       function(error, result) {console.log(result, error)}
//     );

//     console.log(res)
    
//     imagesUrl.push(res.secure_url);
//   })

//   return imagesUrl;
// }

export default handler;