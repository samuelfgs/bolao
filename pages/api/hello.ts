// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next'
const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)
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
  if (body.endpoint === "match") {
    const outcome = await supabase.from("outcome").select("*");
    if (outcome.data) {
      outcome.data.forEach(res => {
        const m = match.data.find(m => m._id === res.match_id)!;
        m.home_score = res.home_score;
        m.away_score = res.away_score;
      })
    }
    res.status(200).json(match);
    return ;
  } else if (body.endpoint === "standings") {
    res.status(200).json(standings);
    return ;
  }
  const data = await (await fetch("http://api.cup2022.ir/api/v1/" + body.endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.WC_API_TOKEN}`
    }
  })).json();
  res.status(200).json(data);
}
