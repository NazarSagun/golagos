import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchAccomodations} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import AccomodationsSlider from './AccomodationSlider';
import MiddleInfo from './MiddleInfo';
import AccomodationsItems from './AccomodationItems';
import Loader from '../../../../HOC/Loader';

class Accomodation extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchAccomodations();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <AccomodationsSlider />
        <MiddleInfo />
          {this.props.isFetching ? <Loader /> : <AccomodationsItems accomodations={this.props.accomodations} />}
        
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accomodations: Object.values(state.data.accomodation),
    isFetching: state.data.isACFetching
  }
}

export default connect(mapStateToProps, {fetchAccomodations})(Accomodation);