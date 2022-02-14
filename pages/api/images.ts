import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import cloudinary from 'cloudinary';
import { IImages } from "../../interfaces/Images";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case 'GET':
      break;
    case 'POST':
      return createImages(req.body);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // POST /api/images
  async function createImages(body: IImages) {
    try {
      const res = uploadHelper(body.images as File[]);

      console.log(res);

    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

const uploadHelper = (images: File[]) => {
  const imagesUrl: string[] = [];
  console.log(images[0])

  images.map(async (file: File) => {
    let imageURI:string| void = getBase64(file);
    console.log('imageURI', imageURI)

    if(!imageURI) throw new Error('Failed to convert an image file');

    const res = await cloudinary.v2.uploader.upload(imageURI, 
      { 
        resource_type: "image", 
        folder: 'music-instruments/',
        public_id: file.name,
        chunk_size: 6_000_000, // 6MB
      },

      function(error, result) {console.log(result, error)}
    );

    console.log(res)
    
    imagesUrl.push(res.secure_url);
  })

  return imagesUrl;
}

function getBase64(file: File): string | void {
  console.log('get base64')
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    return reader.result;
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}


export default handler;