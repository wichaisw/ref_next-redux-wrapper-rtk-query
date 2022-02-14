import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const instrumentHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const instrumentId: number = Number(req.query.id);

  switch(req.method) {
    case 'GET':
      return retrieveInstrumentById(instrumentId);
    case 'PUT':
      // edit product
      return 
    default:
      res.setHeader('Allow', ['GET', 'POST']);
  }

  // GET /api/instruments/:id
  async function retrieveInstrumentById(id: number) {
    const instrument = await prisma.instrument.findUnique({
      where: { id: id },
      // include: { productImage: true }
    })
    
    res.status(200).json(instrument);
  }
}

export default instrumentHandler;