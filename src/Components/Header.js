import React from "react";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import { Search } from "@material-ui/icons";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search for an artist, album or song" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={"user?.display_name"} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
