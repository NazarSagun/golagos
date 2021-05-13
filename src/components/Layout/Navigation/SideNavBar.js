import React from "react";
import "./index.css";
import Select from './Select';

import {Link} from 'react-router-dom';

const languages = [
  { id: 0, value: 'en', icon: 'united-kingdom.png'},
  { id: 1, value: 'de', icon: 'germany.png'},
  { id: 2, value: 'pt', icon: 'portugal.png'}
]

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
        <Link to="/Lagos"><li> Lagos </li></Link>
        <Link to="/Services"><li> Services </li></Link>
        <Link to="/Real Estate"><li> Real Estate </li></Link>
        <Link to="/AboutUs"><li> About Us </li></Link>
        {/* <Select items={languages}/> */}
      </ul>
    </nav>
  );
};

export default SideNavBar;