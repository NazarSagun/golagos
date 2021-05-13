import React from 'react';

import {fetchIndividual} from '../../../../actions';
import { connect } from 'react-redux';

import Loader from '../../../HOC/Loader';
import MixedSingleShow from './MixedSingleShow';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer';

import './index.css';

class MixedSingle extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchIndividual(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    

    return (
      <div>
        <Navigation />
        {!this.props.individual ? <Loader /> : <MixedSingleShow individual={this.props.individual} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    individual: state.data.individual[ownProps.match.params.id],
    isFetching: state.data.isIFetching
  }
}

export default connect(mapStateToProps, {fetchIndividual})(MixedSingle);