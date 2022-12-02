// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { useRouter } from "next/router";
import { usePlasmicQueryData } from "@plasmicapp/query";
import "@plasmicpkgs/antd/dist/antd.css"
import { Supabase } from "../components/supabase";
import { AdminResults, Match } from "../state-management/app";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlasmicPalpitesComp from "../components/plasmic/bolao/PlasmicPalpitesComp";

function Classificacao() {
  const router = useRouter();
  const id = router.query.id;

  const [ matches, setMatches ] = React.useState<Match[]>([]);
  
  const { data } = usePlasmicQueryData(`outcome`, async() => {
    return await Supabase.select("outcome");
  });

  React.useEffect(() => {
    if (data) {
      setMatches(data);
    }
  }, [data]);

  const onSave = async () => {
    const data = await Supabase.upsert("outcome", matches.map(match => ({
      id: match.id,
      match_id: match.match_id,
      home_score: match.home_score,
      away_score: match.away_score
    })));
    debugger;
    if (Array.isArray(data)) {
      toast.success("Resultados salvos com sucesso!", {
        position: "top-right",
        autoClose: 2000
      });
    } else {
      console.log("dale251", data);
      toast.error("Aconteceu algum erro! Tente novamente.", {
        position: "top-right",
        autoClose: 2000
      });
    }
  }

  const onChange = (match_id: string, home_score: number, away_score: number) => {
    const match = matches.find(match => match.match_id === match_id)!;
    match.home_score = home_score;
    match.away_score = away_score;
    setMatches([...matches]);
  }

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <ToastContainer />
      <AdminResults.Provider value={{
        matches,
        onChange
      }}>
        <PlasmicPalpitesComp
          isView={true} 
          save={{
            onClick: onSave
          }}
        />
      </AdminResults.Provider>
    </ph.PageParamsProvider>
  );
}

export default Classificacao;
