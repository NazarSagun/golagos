import React from 'react';

import {fetchEstate} from '../../../../../actions';
import { connect } from 'react-redux';

import Loader from '../../../../HOC/Loader';
import EstateShow from './EstateShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';

import './index.css';

class EstateSingle extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchEstate(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    return (
      <div>
        <Navigation />
        {!this.props.estate ? <Loader /> : <EstateShow estate={this.props.estate} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    estate: state.data.estate[ownProps.match.params.id],
    isFetching: state.data.isFetching
  }
}

export default connect(mapStateToProps, {fetchEstate})(EstateSingle);