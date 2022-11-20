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
import PlasmicPalpites from "../components/plasmic/bolao/PlasmicPalpites";
function Partidas() {
  const router = useRouter();
  React.useEffect(() => {
    if (!state.logged_user_id) {
      router.push("/login");
    }
  }, []);
  const snap = useSnapshot(state);
  React.useEffect(() => {
    (async () => {
      state.matches = await Supabase.select("bets", {
        filter: [{
          column: "user_id",
          operator: "eq",
          value: state.logged_user_id
        }]
      });
      const top_scorer = await Supabase.select("top_scorer", {
        filter: [{
          column: "user_id",
          operator: "eq",
          value: state.logged_user_id
        }]
      }) as any[];
      if (top_scorer.length === 1) {
        state.top_scorer = {
          id: top_scorer[0].id,
          player: top_scorer[0].player
        }
      } else {
        state.top_scorer = {
          player: ""
        }
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

    const rowsToInsert = formattedRows.filter(match => match.id === undefined);
    const rowsToUpsert = formattedRows.filter(match => match.id !== undefined);
    const data = await Supabase.upsert("bets", rowsToUpsert);
    const data2 = await Supabase.insert("bets", rowsToInsert);
    const data3 = await Supabase.upsert("top_scorer", {
      user_id: state.logged_user_id,
      player: state.top_scorer!.player,
      ...(state.top_scorer!.id ? { id: state.top_scorer!.id } : {})
    })
    if (Array.isArray(data) && Array.isArray(data2) && Array.isArray(data3)) {
      toast.success("Resultados salvos com sucesso!", {
        position: "top-right",
        autoClose: 2000
      });
    } else {
      toast.error("Aconteceu algum erro! Tente novamente.", {
        position: "top-right",
        autoClose: 2000
      });
    }

    
  }

  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <ToastContainer />
        <PlasmicPalpites
          save={{
            onClick: onSave
          }}
          artilheiro={{
            value: snap.top_scorer?.player,
            onChange: (e) => state.top_scorer!.player = e.target.value
          }}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Partidas;
