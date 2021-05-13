import React from 'react';

import {fetchLearn} from '../../../../../actions';
import { connect } from 'react-redux';

import Loader from '../../../../HOC/Loader';
import LearnShow from './LearnShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';

import './index.css';

class LearnSingle extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchLearn(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    

    return (
      <div>
        <Navigation />
        {!this.props.learnSingle ? <Loader /> : <LearnShow learnSingle={this.props.learnSingle} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    learnSingle: state.data.learn[ownProps.match.params.id],
    isFetching: state.data.isLFetching
  }
}

export default connect(mapStateToProps, {fetchLearn})(LearnSingle);