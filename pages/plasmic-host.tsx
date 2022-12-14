
import * as React from 'react';
import { DataProvider, PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { usePlasmicQueryData } from "@plasmicapp/query"

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

registerAll();
import { registerAll as registerSupabase } from "../components/supabase";
registerSupabase();
export const Fetcher = (props: any) => {
  const { data, error } = usePlasmicQueryData(props.endpoint, async () => {
    return await (await fetch("/api/hello/", {
      method: "POST",
      body: JSON.stringify({
        endpoint: props.endpoint
      }),
    })).json();
  });
  return <DataProvider data={data} name={props.name ?? "fetchedData"}>
    {props.children}
  </DataProvider>
}

registerComponent(Fetcher, {
  name: "Fetcher",
  providesData: true,
  props: {
    endpoint: "string",
    children: "slot",
    name: "string",
  },
  importPath: "./pages/plasmic-host"
});

import { DateTime } from "luxon";
import { registerAll } from '../components/supabase';

export const DateText = (props: any) => {
  if (typeof props.date === "undefined") return <span className={props.className}>date invalid</span>;
  let d = DateTime.fromFormat(props.date, "MM/dd/yyyy HH:mm", { zone: "UTC+3" });
  if (d.invalidReason) {
    d = DateTime.fromFormat(props.date, "MM/d/yyyy HH:mm", { zone: "UTC+3" });
  }
  const userTimeZone = -new Date().getTimezoneOffset() / 60;
  return <span className={props.className}>{
    d.setZone(`UTC${userTimeZone}`).toFormat("dd/MM/yyyy HH:mm")
  }</span>
}

registerComponent(DateText, {
  name: "DateText",
  props :{
    date: "string"
  },
  importPath: "./pages/plasmic-host"
})

import { registerTable, registerTableColumn, registerTableValue } from '../components/AntdTable';

registerTable();
registerTableColumn();
registerTableValue();