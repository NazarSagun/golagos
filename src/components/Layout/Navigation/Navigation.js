import React from 'react';

import BackDrop from './BackDrop';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

export default class Navigation extends React.Component {

  state = {
    sideBarOpen: false
  };

  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  render() {

    const mystyle = {
      position: "fixed",
      width: "100%",
      height: "100hv",
      backgroundImage: `url('/client/src/assets/image/main-page.jpg')`,
      zIndex: 999
    }

    return (
      <div style={mystyle}>
        <NavBar open={this.handleOpen} />
        {this.state.sideBarOpen ? (
          <div>
            <BackDrop close={this.handleClose} />{" "}
          </div>
        ) : null}
        <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
      </div>
    );
  }
}