import { usePlasmicQueryData } from "@plasmicapp/query";
import { DataProvider, registerComponent, PlasmicCanvasContext } from '@plasmicapp/host';
import React from 'react';
import qs from "qs";
import { FilterOperator } from "./types";

export interface Filter {
  column: string,
  operator: FilterOperator,
  value: any
}

export interface useSelectParams {
  columns?: string,
  order?: string,
  filter?: Filter | Filter[]
};

export class Supabase {

  static useSelect(table: string, params?: useSelectParams) {
    const key = JSON.stringify({ table, ...(params ? params : {}) });
    return usePlasmicQueryData(key, async () => {
      console.log("dale", "oi")
      const data = await this.select(table, params);
      console.log("dale", data);
      return data;
    });
  }

  static async select(table: string, params?: useSelectParams) {
    const { columns, order, filter } = params ?? {};
    const params2 = {
      ...(columns ? { columns } : {}),
      ...(order ? { order } : {}),
      ...(filter ? { filter } : {})
    }
    console.log("dale2", table, params);
    const data = await fetch(`/api/supabase/${table}/?${qs.stringify(params2)}`);
    console.log("dale", data);
    return await data.json();
  }

  static async insert(table: string, data: any) {
    return await (await fetch(`/api/supabase/${table}`, {
      method: "POST",
      body: JSON.stringify(data)
    })).json();
  }

  static async upsert(table: string, data: any) {
    return await (await fetch(`/api/supabase/${table}`, {
      method: "PUT",
      body: JSON.stringify(data)
    })).json();
  }
}

interface SupabaseFetcherProps extends useSelectParams {
  table: string;
  queryName: string;
  children: React.ReactNode;
}

export const SupabaseFetcher = (props: SupabaseFetcherProps) => {
  const { table, columns, order, queryName, children, filter } = props;

  const { data, error, isLoading } = Supabase.useSelect(table, {columns, order, filter});
  const inStudio = !!React.useContext(PlasmicCanvasContext);
  
  console.log("dale", error);
  if (!table) {
    return <p>Missing table name</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }
  if (isLoading) {
    return inStudio ? <p>Loading...</p> : null;
  }

  return <DataProvider
    name={queryName ?? "supabase"}
    data={data}
  >
    {children}
  </DataProvider>
}

export const registerAll = () => {
  registerComponent(SupabaseFetcher, {
    name: "SupabaseFetcher",
    props: {
      queryName: "string",
      table: "string",
      select: "string",
      order: "string",
      children: "slot",
      filter: "object"
    },
    providesData: true,
    importPath: "./components/supabase"
  });
}

