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
  const inserted = await Supabase.select("outcome");
  const missingRows = matchs.filter(match => !inserted.find((ins: any) => ins.match_id === match._id)).map(match => ({
    match_id: match._id,
    home_score: match.home_score,
    away_score: match.away_score,
  }));
  const ret = await Supabase.insert("outcome", missingRows);
  console.log("dale", ret);
  res.status(200).json({ ret });
}
