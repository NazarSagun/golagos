import React from 'react';
import { connect } from 'react-redux';
import {fetchAccomodation} from '../../../../../actions';

import AccomodationSingleShow from './AccomodationSingleShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';
import Loader from '../../../../HOC/Loader';
import './index.css';

class AccomodationSingle extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchAccomodation(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    const render = !this.props.accomodation ? <Loader /> : <AccomodationSingleShow accomodation={this.props.accomodation} />

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
    accomodation: state.data.accomodation[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchAccomodation})(AccomodationSingle);