import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchLearns} from '../../../../../actions';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import LearnSlider from './LearnSlider';
import MiddleInfo from './MiddleInfo';
import LearnItems from './LearnItems';
import Loader from '../../../../HOC/Loader';

class Learn extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchLearns();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <LearnSlider />
        <MiddleInfo />
        {this.props.isFetching || !this.props.learn ? <Loader /> : <LearnItems learn={this.props.learn} /> }
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    learn: Object.values(state.data.learns),
    isFetching: state.data.isLFetching
  }
}

export default connect(mapStateToProps, {fetchLearns})(Learn);