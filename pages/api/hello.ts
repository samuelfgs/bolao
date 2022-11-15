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
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyNGRiMWZkOWFhYzIyNjcwMTlkZjUiLCJpYXQiOjE2Njg0MzU1MTgsImV4cCI6MTY2ODUyMTkxOH0.BLu09f8g-0eOJlLBB8EkvC7q92de2wnnfubkJ_FW-jg"
    }
  })).json();
  res.status(200).json(data);
}
