import { NextApiRequest, NextApiResponse} from 'next'
import prisma from '../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case 'GET':
      return 
    case 'POST':
      return createInstrument();
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  // GET /api/instruments
  async function createInstrument() {
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

export default handler;