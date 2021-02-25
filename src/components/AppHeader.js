import React from "react";
import { NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <div>
      <ul className="app-header">
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/ask">Ask</NavLink>
        </li>
        <li>
          <NavLink to="/show">Show</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppHeader;
