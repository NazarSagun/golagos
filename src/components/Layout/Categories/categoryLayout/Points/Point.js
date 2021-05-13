import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchPoints} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/';
import PointSlider from './PointSlider';
import MiddleInfo from './MiddleInfo';
import PointItems from './PointItems';
import Loader from '../../../../HOC/Loader';

class Points extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchPoints();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <PointSlider />
        <MiddleInfo />
          {this.props.isFetching ? <Loader /> : <PointItems points={this.props.points} />}
        
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    points: Object.values(state.data.points),
    isFetching: state.data.isPFetching
  }
}

export default connect(mapStateToProps, {fetchPoints})(Points);