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

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchActivities();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <ActivitiesSlider />
        <MiddleInfo />
        {this.props.isFetching ? <Loader /> : <ActivityItems activities={this.props.activities} /> }
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activities: Object.values(state.data.activities),
    isFetching: state.data.isAFetching
  }
}

export default connect(mapStateToProps, {fetchActivities})(Activities);