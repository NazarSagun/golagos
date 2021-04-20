import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchBeaches} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import BeachesSlider from './BeachesSlider';
import MiddleInfo from './MiddleInfo';
import BeachItems from './BeachItems';
import Loader from '../../../../HOC/Loader';

class Beaches extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchBeaches();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    console.log(this.props.beaches)
    return (
      <React.Fragment>
        <Navigation />
        <BeachesSlider />
        <MiddleInfo />
          {this.props.isFetching ? <Loader /> : <BeachItems beaches={this.props.beaches} />}
        
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beaches: Object.values(state.data.data),
    isFetching: state.data.isFetching
  }
}

export default connect(mapStateToProps, {fetchBeaches})(Beaches);