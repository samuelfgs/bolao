// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicScore, DefaultScoreProps } from "./plasmic/bolao/PlasmicScore";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { state, ViewResults } from "../state-management/app";
import { useSnapshot } from "valtio";
export interface ScoreProps extends DefaultScoreProps {}

function Score_(props: ScoreProps, ref: HTMLElementRefOf<"div">) {
  const viewCtx = React.useContext(ViewResults);
  const matches = useSnapshot(state.matches);
  if (viewCtx) {
    const match = viewCtx.find(match => match.match_id === props.matchId)!;
    return <PlasmicScore 
      root={{ ref }}
      {...props}
      homeScore={`${match ? (match?.home_score ?? 0) : ""}`}
      awayScore={`${match ? (match?.away_score ?? 0) : ""}`}
      hide={props.isOpen ? true : false}
    />
  }


  if (!state.matches.find(match => match.match_id === props.matchId)) {
    state.matches.push({ match_id: props.matchId! });
  }
  const match = state.matches.find(match => match.match_id === props.matchId)!;
  return <PlasmicScore 
    root={{ ref }} 
    {...props}
    homeScoreInput={{
      value: match.home_score,
      onChange: (e) => match.home_score = +e.target.value
    }}
    awayScoreInput={{
      value: match.away_score,
      onChange: (e) => match.away_score = +e.target.value
    }}
    homeScore={`${match ? (match.home_score ?? 0) : ""}`}
    awayScore={`${match ? (match.away_score ?? 0) : ""}`}
  />;
}

const Score = React.forwardRef(Score_);
export default Score;
