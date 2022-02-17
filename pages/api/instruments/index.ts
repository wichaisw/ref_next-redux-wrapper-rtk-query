import { NextApiRequest, NextApiResponse} from 'next'
import prisma from '../../../lib/prisma';
import { IImages } from '../../../interfaces/Images';

const instrumentHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case 'GET':
      return retrieveInstruments();
    case 'POST':
      return createInstrument();
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  // GET /api/isntruments
  async function retrieveInstruments() {
    console.log('retrieveInstruments');

    try {
      const instruments = await prisma.instrument.findMany({
        include: {
          productImage: true,
          reviews: true
        }
      })

      return res.status(200).json(instruments)
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  // POST /api/instruments
  async function createInstrument() {
    console.log('createInstrument');
    const { type,  price, name, brand, info } = req.body;

    try {      
      const instrument = await prisma.instrument.create({
        data: {
          type,
          price,
          name,
          brand,
          info
        }
      })

      return res.status(201).json(instrument);
    } catch(err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default instrumentHandler;