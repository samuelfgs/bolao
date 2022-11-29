// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import match from "../../data.json";
import standings from "../../standings.json";

import data from "../../data.json";
import { Supabase } from '../../components/supabase';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const matchs = data.data;
  const ret = await Supabase.insert("outcome", matchs.map(match => ({
    match_id: match._id,
    home_score: match.home_score,
    away_score: match.away_score
  })));
  console.log("dale", ret);
  res.status(200).json({ ret });
}
