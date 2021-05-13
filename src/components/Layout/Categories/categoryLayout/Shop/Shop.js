import React from 'react';

import {fetchShop} from '../../../../../actions';
import { connect } from 'react-redux';

import Loader from '../../../../HOC/Loader';
import ShopShow from './ShopShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';

import './index.css';

class Shop extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchShop(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    

    return (
      <div>
        <Navigation />
        {!this.props.shop ? <Loader /> : <ShopShow shop={this.props.shop} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shop: state.data.shop[ownProps.match.params.id],
    isFetching: state.data.isFetching
  }
}

export default connect(mapStateToProps, {fetchShop})(Shop);