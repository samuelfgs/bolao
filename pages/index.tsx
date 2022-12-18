// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/bolao/PlasmicGlobalVariant__Screen";
import { useRouter } from "next/router";
import { state } from "../state-management/app";
import { Supabase } from "../components/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalContextsProvider from "../components/plasmic/bolao/PlasmicGlobalContextsProvider";
import { useSnapshot } from "valtio";
import { usePlasmicQueryData } from "@plasmicapp/query"
import PlasmicPalpitesComp from "../components/plasmic/bolao/PlasmicPalpitesComp";
import Select from "../components/Select";

function Partidas() {
  const { data: matchs, error } = usePlasmicQueryData("match", async (): Promise<any> => {
    return await (await fetch("/api/hello/", {
      method: "POST",
      body: JSON.stringify({
        endpoint: "match"
      }),
    })).json();
  });
  
  const router = useRouter();
  React.useEffect(() => {
    if (!state.logged_user_id) {
      router.push("/login");
    }
  }, []);
  const snap = useSnapshot(state);
  React.useEffect(() => {
    (async () => {
      state.matches = await Supabase.select("bets2", {
        filter: [{
          column: "user_id",
          operator: "eq",
          value: state.logged_user_id
        }]
      });
      const user = await Supabase.select("users", {
        filter: [{
          column: "id",
          operator: "eq",
          value: state.logged_user_id
        }]
      }) as any[];
      if (user.length > 0) {
        state.top_scorer = user[0].top_scorer;
        state.champion = user[0].champion;
      } else {
        state.top_scorer = "";
        state.champion = "";
      }
    })();
  }, []);
  const onSave = async () => {
    const formattedRows = state.matches.map(match => ({
      id: match.id,
      match_id: match.match_id,
      user_id: state.logged_user_id,
      home_score: match.home_score,
      away_score: match.away_score
    }));
    const canSaveRow = formattedRows.filter(_match => {
      const match = matchs?.data.find((match: any) => match._id === _match.match_id) 
      const matchDate = new Date(`${match.local_date} +3`)
      const currDate = new Date(Date.now());
      return currDate <= matchDate;
    });

    const data = await Supabase.upsert("bets2", canSaveRow);
    const data2 = await Supabase.upsert("users", {
      id: state.logged_user_id,
      champion: state.champion
    })
    if (Array.isArray(data) && Array.isArray(data2)) {
      toast.success("Resultados salvos com sucesso!", {
        position: "top-right",
        autoClose: 2000
      });
    } else {
      console.log(data, data2)
      toast.error("Aconteceu algum erro! Tente novamente.", {
        position: "top-right",
        autoClose: 2000
      });
    }
  }
  let artilheiro: string = snap.top_scorer ?? "Nao escolheu";
  let campeao = snap.champion ?? "Nao escolheu";  
  if (campeao === "Argentina") {
    campeao += " (5 pontos)"
  } else {
    campeao += " (0 pontos)"
  }
  if (artilheiro.toLowerCase().includes("messi")) {
    artilheiro += " (5 pontos)";
  } else {
    artilheiro += " (0 pontos)";
  }
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <ToastContainer />
        <PlasmicPalpitesComp
          save={{
            onClick: onSave
          }}
          campeao2={campeao}
          artilheiro2={artilheiro}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Partidas;
