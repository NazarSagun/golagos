import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchShops} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import ShopSlider from './ShopSlider';
import MiddleInfo from './MiddleInfo';
import ShopItems from './ShopItems';
import Loader from '../../../../HOC/Loader';

class Activities extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchShops();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <ShopSlider />
        <MiddleInfo />
        {this.props.isFetching ? <Loader /> : <ShopItems shops={this.props.shops} /> }
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shops: Object.values(state.data.shops),
    isFetching: state.data.isSFetching
  }
}

export default connect(mapStateToProps, {fetchShops})(Activities);