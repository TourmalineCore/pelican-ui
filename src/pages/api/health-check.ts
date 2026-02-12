import { NextApiRequest, NextApiResponse } from 'next';

// endpoint is /api/health-check
export default function check(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200)
    .json({
      status: `OK`,
      timestamp: new Date(),
    });
}
