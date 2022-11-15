// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/bolao/PlasmicGlobalVariant__Screen";
import { PlasmicPartidas } from "../components/plasmic/bolao/PlasmicPartidas";
import { useRouter } from "next/router";
import { state } from "../state-management/app";
import { Supabase } from "../components/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Partidas() {
  const router = useRouter();
  React.useEffect(() => {
    if (!state.logged_user_id) {
      router.push("/login");
    }
  }, []);

  React.useEffect(() => {
    (async () => {
      state.matches = await Supabase.select("bets", {
        filter: [{
          column: "user_id",
          operator: "eq",
          value: state.logged_user_id
        }]
      });
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
    if (Array.isArray(data) && Array.isArray(data2)) {
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
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <ToastContainer />
      <PlasmicPartidas 
        save={{
          onClick: onSave
        }}
      />
    </ph.PageParamsProvider>
  );
}

export default Partidas;
