import { NextApiRequest, NextApiResponse } from 'next';

export default function check(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200)
    .json({
      status: `OK`,
      timestamp: new Date(),
    });
}
