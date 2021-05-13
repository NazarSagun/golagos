import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchEstates} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import EstateSlider from './EstateSlider';
import EstateItems from './EstateItems';
import Loader from '../../../../HOC/Loader';
import MiddleInfo from './MiddleInfo';

class RealEstate extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchEstates();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <EstateSlider />
        <MiddleInfo />
        {this.props.isFetching ? <Loader /> : <EstateItems estates={this.props.estates} /> }
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    estates: Object.values(state.data.estates),
    isFetching: state.data.isRFetching
  }
}

export default connect(mapStateToProps, {fetchEstates})(RealEstate);