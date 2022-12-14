// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/bolao/PlasmicGlobalVariant__Screen";
import { PlasmicClassificacao } from "../components/plasmic/bolao/PlasmicClassificacao";
import { useRouter } from "next/router";

import "@plasmicpkgs/antd/dist/antd.css"
function Classificacao() {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicClassificacao />
    </ph.PageParamsProvider>
  );
}

export default Classificacao;
