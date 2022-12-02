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
  const users = await Supabase.select("users");
  for (const user of users) {
    const bets = await Supabase.select("bets", {
      filter: {
        column: "user_id",
        operator: "eq",
        value: user.id
      }
    });
    const newBets = matchs.map(match => {
      const bet = bets.find((bet: any) => bet.match_id === match._id && bet.away_score !== null && bet.home_score !== null);
      return {
        match_id: match._id,
        user_id: user.id,
        home_score: bet?.home_score,
        away_score: bet?.away_score,
      }
    });
    const ret = await Supabase.insert("bets2", newBets);
    console.log(ret, ret.length);
  }
  res.status(200).json({ users });
}
