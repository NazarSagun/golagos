import React from 'react';


import {fetchActivityItem} from '../../../../../actions';
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
    this.props.fetchActivityItem(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log(this.props)

    const render = !this.props.activity ? <Loader /> : <ActivityShow activity={this.props.activity} />

    return (
      <div>
        <Navigation />
        {render}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activity: state.data.data[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchActivityItem})(Activity);