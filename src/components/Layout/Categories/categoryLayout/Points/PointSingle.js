import React from 'react';

import {fetchPoint} from '../../../../../actions';
import { connect } from 'react-redux';

import Loader from '../../../../HOC/Loader';
import PointShow from './PointShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';

import './index.css';

class PointSingle extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchPoint(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    return (
      <div>
        <Navigation />
        {!this.props.point ? <Loader /> : <PointShow point={this.props.point} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    point: state.data.point[ownProps.match.params.id],
    isFetching: state.data.isFetching
  }
}

export default connect(mapStateToProps, {fetchPoint})(PointSingle);