// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../components/plasmic/bolao/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/bolao/PlasmicGlobalVariant__Screen";
import { PlasmicRanking } from "../components/plasmic/bolao/PlasmicRanking";
import { useRouter } from "next/router";
import "@plasmicpkgs/antd/dist/antd.css"
import { Supabase } from "../components/supabase";
import { usePlasmicQueryData } from "@plasmicapp/query"

function Ranking() {
  const { data: users } = Supabase.useSelect("users", {
    filter: {
      column: "paid",
      operator: "eq",
      value: true
    }
  });
  
  const { data: matchs, error } = usePlasmicQueryData("match", async (): Promise<any> => {
    return await (await fetch("/api/hello/", {
      method: "POST",
      body: JSON.stringify({
        endpoint: "match"
      }),
    })).json();
  });

  const [ betsByUser, setBetsByUser ] = React.useState<Record<string, any> | undefined>(undefined)
  
  const [ items, setItems ] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const bets: Record<string, any> = {};
      if (Array.isArray(users)) {
        for (const user of users) {
          bets[user.id] = await Supabase.select("bets2", {
            filter: {
              column: "user_id",
              operator: "eq",
              value: user.id
            }
          });
        }
        setBetsByUser(bets);
      }
    })();
  }, [users]);
  
  React.useEffect(() => {
    if (Array.isArray(users) && Array.isArray(matchs?.data) && betsByUser) {
      const items = users.map((user) => {
        let three = 0, one = 0, jogos = 0;
        matchs.data.filter((match: any) => {
          const matchDate = new Date(`${match.local_date} +3`);
          const localDate = new Date(Date.now());
          return matchDate < localDate;
        }).forEach((match: any) => {
            jogos++;
            const bet = betsByUser[user.id]?.find(
                (bet: any) => ( bet.match_id === match._id )
            );
            if (bet && bet.away_score !== null && bet.home_score !== null) {
                const diffReal = match.away_score - match.home_score;
                const myDiff = bet.away_score - bet.home_score;
                if (match.away_score === bet.away_score && diffReal === myDiff) {
                    three++;
                } else if (myDiff * diffReal > 0 || (myDiff === 0 && diffReal === 0)) {
                    one++;
                }
            }
        });
        const campeao = user.champion === "Argentina" ? 1 : 0;
        const artilheiro = user.top_scorer?.toLowerCase()?.includes("messi") ? 1 : 0;
        return {
            user: user.name,
            pts: three * 3 + one + (campeao + artilheiro) * 5,
            cravadas: three,
            vencedor: one,
            id: user.id,
            j: jogos,
            pos: 1,
            campeao,
            artilheiro
        }
      }).sort((a, b) => ( a.pts !== b.pts 
          ? b.pts - a.pts 
          : a.cravadas !== b.cravadas
          ? b.cravadas - a.cravadas
          : a.user?.localeCompare(b.user))
      );
      for (let i = 1; i < items.length; i++) {
        if (items[i-1].pts === items[i].pts && items[i-1].cravadas === items[i].cravadas) {
          items[i].pos = items[i-1].pos;
        } else {
          items[i].pos = i+1;
        }
      }
      setItems(items);
    }
  }, [users, betsByUser, matchs])

  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicRanking 
          antdTable={{ items }}
          isLoading={items.length === 0}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Ranking;
