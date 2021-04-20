import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchActivities} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import ActivitiesSlider from './ActivitiesSlider';
import MiddleInfo from './MiddleInfo';
import ActivityItems from './ActivityItems';
import Loader from '../../../../HOC/Loader';

class Activities extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this._isMounted = true;
  //   this.props.fetchActivities();
  // }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    // const prevAct = this.props.activities;
    // const newAct = prevAct.filter((set => a => !set.has(a.item_id) && set.add(a.item_id))(new Set));

    return (
      <React.Fragment>
        <Navigation />
        <ActivitiesSlider />
        <MiddleInfo />
          {/* {!this.props.activities ? <Loader /> : } */}
        <ActivityItems />
        <Footer />
      </React.Fragment>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     activities: state.data.data,
//     // activities: Object.values(state.data.data),
//     isFetching: state.data.isFetching
//   }
// }

export default Activities;
// connect(mapStateToProps, {fetchActivities})