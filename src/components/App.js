import React from 'react';
import './App.css';
import history from '../history';
//import router
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { clearMessage } from "../actions/message";
//import components
import ScrollToTop from '../services/ScrollToTop';
import Login from './Admin/Panel/Auth/login.component';
import Panel from './Admin/Panel/Panel';
import MainPage from './Layout/MainPage/MainPage';
import Categories from './Layout/Categories/Categories';
import AboutUs from './Layout/AboutUs';
import BeachSingle from './Layout/Categories/categoryLayout/Beaches/BeachSingle';
import MixedSingle from './Layout/MainPage/MixedActivity/MixedSingle';
import AccomodationSingle from './Layout/Categories/categoryLayout/Accomodation/AccomodationSingle';
import Activity from './Layout/Categories/categoryLayout/Activities/Activity';
import Shop from './Layout/Categories/categoryLayout/Shop/Shop';
import EstateSingle from './Layout/Categories/categoryLayout/RealEstate/EstateSingle';
import PointSingle from './Layout/Categories/categoryLayout/Points/PointSingle';
import LearnSingle from './Layout/Categories/categoryLayout/Learn/LearnSingle';
import Lagos from './Layout/Categories/categoryLayout/Lagos/Lagos';
import Services from './Layout/Services';

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
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/Login" exact component={Login} />
              <Route path="/AboutUs" exact component={AboutUs} />
              <Route path="/Services" exact component={Services} />
              <Route path="/Lagos" exact component={Lagos} />
              <Route path="/:name" exact component={Categories} />
              <Route path="/Beaches/:id" exact component={BeachSingle} />
              <Route path="/Individual/:id" exact component={MixedSingle} />
              <Route path="/Accomodation/:id" exact component={AccomodationSingle} />
              <Route path="/Shopping/:id" exact component={Shop} />
              <Route path="/Activities/:id" exact component={Activity} />
              <Route path="/Learn/:id" exact component={LearnSingle} />
              <Route path="/Estate/:id" exact component={EstateSingle} />
              <Route path="/Point/:id" exact component={PointSingle} />
              <Route path="/Admin/Panel" exact component={Panel} />
              
            </Switch>
          </ScrollToTop>
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
