import React from 'react';
import './App.css';
import history from '../history';
//import router
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { clearMessage } from "../actions/message";
//import components
// import Admin from './Admin/Admin';
import Login from './Admin/Panel/Auth/login.component';
import Panel from './Admin/Panel/Panel';
import MainPage from './Layout/MainPage/MainPage';
import Categories from './Layout/Categories/Categories';
import AboutUs from './Layout/AboutUs';
import BeachSingle from './Layout/Categories/categoryLayout/Beaches/BeachSingle';
import Activity from './Layout/Categories/categoryLayout/Activities/Activity';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModeratorBoard: false,
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
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Router history={history}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/aboutUs" exact component={AboutUs} />
              <Route path="/:name" exact component={Categories} />
              <Route path="/beaches/:id" exact component={BeachSingle} />
              <Route path="/activities/:id" exact component={Activity} />
              <Route path="/admin/panel" exact component={Panel} />
              
            </Switch>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
