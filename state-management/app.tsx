import { useRouter } from "next/router";
import React from "react";
import { proxy, subscribe } from "valtio";
import { Supabase } from "../components/supabase";

export interface Match {
  match_id: string;
  home_score?: number;
  away_score?: number;
  id?: string;
}

export interface TopScorer {
  id?: string;
  player?: string;
}
export interface AppState {
  logged_user_id?: number;
  matches: Match[];
  top_scorer?: TopScorer;
}

export const mkInitialState = () => ({
  logged_user_id: undefined
})

const globalStateKey = "bolao-global-state"

export const initializePersistentData = (): AppState => {
  const persistentData = typeof window !== "undefined" && window.localStorage.getItem(globalStateKey);
  if (persistentData) {
    const state = JSON.parse(persistentData) as AppState;
    state.matches = [];
    state.top_scorer = undefined;
    return state;
  } else {
    return {
      logged_user_id: undefined,
      matches: [],
      top_scorer: undefined
    }
  }
}

export const state = proxy(initializePersistentData());

subscribe(state, () => {
  localStorage.setItem(globalStateKey, JSON.stringify(state));
});

export const ViewResults = React.createContext<Match[] | undefined>(undefined);
export const AdminResults = React.createContext<{
  matches: Match[],
  onChange: (match_id: string, home_score: number, away_score: number) => void
} | undefined>(undefined)