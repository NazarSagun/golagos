import React from "react";
import axios from "../../../api";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { logout } from "../../../actions/auth";
import { clearMessage } from "../../../actions/message";
import history from '../../../history';

import Tabs from "./Tabs/Tabs";
import "./Panel.css";

import PanelMainSection from './Tabs/Sections/PanelMainSection';
import BeachCategory from './Tabs/Sections/BeachCategory';
import Accomodation from './Tabs/Sections/Accomodation';
import EstateCategory from './Tabs/Sections/RealEstate/EstateCategory';
import PointCategory from './Tabs/Sections/Points/PointCategory';
import ShoppingCategory from './Tabs/Sections/Shop/ShopCategory';
import ActivityCategory from './Tabs/Sections/Activities/ActivityCategory';
import LearnCategory from './Tabs/Sections/ToLearn/Learn';

axios.defaults.withCredentials = true;

class Panel extends React.Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: this.props.isLoggedIn,
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }
  

  renderPanel = () => {
    return (
      <div>
        <h1 className="panel-title">Admin Panel</h1>
        <Link className="logout-button" to="/" onClick={this.logOut} >LogOut</Link>
        <Tabs>
          <div label="Main Page">
            <PanelMainSection />
          </div>
          <div label="Beach">
            <BeachCategory />
          </div>
          <div label="Accomodation">
            <Accomodation />
          </div>
          <div label="Real Estate">
            <EstateCategory />
          </div>
          <div label="To Learn">
            <LearnCategory />
          </div>
          <div label="Point of Interest">
            <PointCategory />
          </div>
          <div label="Shopping">
            <ShoppingCategory />
          </div>
          <div label="Activity">
            <ActivityCategory />
          </div>
          
        </Tabs>
      </div>
    )   
  }

  render() {
    
    return (
      <div>
        {this.state.showAdminBoard ? this.renderPanel() : <div>This is administration area. Turn back? <Link to="/">Main Page</Link> or <Link to="/admin">Login Page</Link></div>}
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    user: state.auth,
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Panel);