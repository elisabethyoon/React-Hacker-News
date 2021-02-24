import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppHeader extends Component {
  render() {
    return (
      <div>
        <ul className="app-header">
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/ask">Ask</Link>
          </li>
          <li>
            <Link to="/show">Show</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default AppHeader;
