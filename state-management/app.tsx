import { useRouter } from "next/router";
import { proxy, subscribe } from "valtio";
import { Supabase } from "../components/supabase";

export interface Match {
  match_id: string;
  home_score?: number;
  away_score?: number;
  id?: string;
}

export interface AppState {
  logged_user_id?: number;
  matches: Match[]
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
    return state;
  } else {
    return {
      logged_user_id: undefined,
      matches: []
    }
  }
}

export const state = proxy(initializePersistentData());

subscribe(state, () => {
  localStorage.setItem(globalStateKey, JSON.stringify(state));
});