import { useRouter } from "next/router";
import * as React from "react";
import { useSnapshot } from "valtio";
import { state } from "../state-management/app";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/bolao/PlasmicHeader";

export interface HeaderProps extends DefaultHeaderProps {}

function Header(props: HeaderProps) {
  const [user, setUser] = React.useState(0);
  const snap = useSnapshot(state);
  const router = useRouter();

  React.useEffect(() => {
    setUser(snap.logged_user_id ?? 0);
  }, [snap]);

  return <PlasmicHeader 
    sair={{
      onClick: () => {
        state.logged_user_id = undefined;
        router.push("/login");
      }
    }}
    admin={{
      render: (props, C) => user === 22 
        ? <C {...props} style={{ display: "block" }} /> 
        : <C {...props} style={{ display: "none" }} /> 
    }}
    {...props} 
  />;
}

export default Header;
