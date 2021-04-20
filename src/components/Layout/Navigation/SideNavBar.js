import React from "react";
import "./index.css";

import {Link} from 'react-router-dom';

const SideNavBar = ({ close, display }) => {
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }

  return (
    <nav className={Classes}>
      <ul>
        <li onClick={close}>
          <img src={'images/icons/baseline_close_black_18dp.png'} />
        </li>
        <Link to="/"><li> Home </li></Link>
        <Link to="/aboutUs"><li> AboutUs </li></Link>
      </ul>
    </nav>
  );
};

export default SideNavBar;