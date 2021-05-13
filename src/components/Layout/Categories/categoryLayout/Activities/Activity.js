import React from 'react';

import {fetchActivity} from '../../../../../actions';
import { connect } from 'react-redux';

import Loader from '../../../../HOC/Loader';
import ActivityShow from './ActivityShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';

import './index.css';

class Activity extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchActivity(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    

    return (
      <div>
        <Navigation />
        {!this.props.activity ? <Loader /> : <ActivityShow activity={this.props.activity} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activity: state.data.activity[ownProps.match.params.id],
    isFetching: state.data.isFetching
  }
}

export default connect(mapStateToProps, {fetchActivity})(Activity);