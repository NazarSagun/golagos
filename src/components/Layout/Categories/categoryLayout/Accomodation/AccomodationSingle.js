import React from 'react';
import { connect } from 'react-redux';
import {fetchAccomodation} from '../../../../../actions';

import axios from '../../../../../api';

import AccomodationSingleShow from './AccomodationSingleShow';
import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer';
import Loader from '../../../../HOC/Loader';
import './index.css';

class AccomodationSingle extends React.Component {

  state = {
    cat: [],
    loading: true
  }

  _isMounted = false;

  // componentDidMount() {
  //   this._isMounted = true;
  //   this.props.fetchAccomodation(this.props.match.params.id);
  // }

  componentDidMount() {

    axios.post(`/accomodation/${this.props.match.params.id}`, {lang: this.props.locale})
    .then(data => {
      this.setState({cat: data.data, loading: false})
    })
    .catch(err => {
      console.log(err)
    })

    
  }

  

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    console.log(this.state.cat, 'state')

    const render = !this.state.cat ? <Loader /> : <AccomodationSingleShow accomodation={this.state.cat} />

    return (
      <div>
        <Navigation />
        {render}
        <Footer />
      </div>
    )
    
  }
}

const mapStateToProps = (state) => {
  return {
    locale: !localStorage.lang ? state.i18n.locale : localStorage.lang
  }
}

export default connect(mapStateToProps, {fetchAccomodation})(AccomodationSingle);