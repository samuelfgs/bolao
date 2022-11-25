// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

import match from "../../data.json";
import standings from "../../standings.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  // if (body.endpoint === "match") {
  //   res.status(200).json(match);
  //   return ;
  // } else if (body.endpoint === "standings") {
  //   res.status(200).json(standings);
  //   return ;
  // }
  const data = await (await fetch("http://api.cup2022.ir/api/v1/" + body.endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.WC_API_TOKEN}`
    }
  })).json();
  res.status(200).json(data);
}
