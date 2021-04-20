import React from 'react';
import { connect } from 'react-redux';
import {fetchBeach} from '../../../.././../actions';

import BeachSingleShow from './BeachSingleShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';
import Loader from '../../../../HOC/Loader';
import './index.css';

class BeachSingle extends React.Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchBeach(this.props.match.params.id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    console.log(this.props)

    const render = !this.props.beach ? <Loader /> : <BeachSingleShow beach={this.props.beach} />

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
    beach: state.data.data[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchBeach})(BeachSingle);