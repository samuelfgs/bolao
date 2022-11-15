// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const data = await (await fetch("http://api.cup2022.ir/api/v1/" + body.endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.WC_API_TOKEN}`
    }
  })).json();
  res.status(200).json(data);
}
