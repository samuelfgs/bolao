// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../../components/plasmic/bolao/PlasmicGlobalVariant__Screen";
import { PlasmicPalpites } from "../../components/plasmic/bolao/PlasmicPalpites";
import { useRouter } from "next/router";
import { usePlasmicQueryData } from "@plasmicapp/query";

import "@plasmicpkgs/antd/dist/antd.css"
import { Supabase } from "../../components/supabase";
import { ViewResults } from "../../state-management/app";
function Classificacao() {
  const router = useRouter();
  const id = router.query.id;

  const { data: matches } = usePlasmicQueryData(id && `view/${id}`, async() => {
    return await Supabase.select("bets", {
      filter: {
        column: "user_id",
        operator: "eq",
        value: id
      }
    });
  });

  const { data: user } = usePlasmicQueryData(id && `user/${id}`, async() => {
    return await Supabase.select("users", {
      filter: {
        column: "id",
        operator: "eq",
        value: id
      }
    })
  });

  const { data: top_scorer } = usePlasmicQueryData(id && `top_scorer/${id}`, async() => {
    return await Supabase.select("top_scorer", {
      filter: {
        column: "user_id",
        operator: "eq",
        value: id
      }
    })
  });

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <ViewResults.Provider value={matches}>
        <PlasmicPalpites
          isView={true} 
          player={user?.[0]?.name} 
          artilheiro2={top_scorer?.length === 1 && top_scorer[0].player != "" ? top_scorer[0].player : "Nao escolheu"}
          save={{
            render: () => <></>
          }}
        />
      </ViewResults.Provider>
    </ph.PageParamsProvider>
  );
}

export default Classificacao;
