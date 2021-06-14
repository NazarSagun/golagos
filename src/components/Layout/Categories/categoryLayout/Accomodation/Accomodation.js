import React from 'react';
import './index.css';

import { connect } from 'react-redux';
import {fetchAccomodations} from '../../../../../actions';

import axios from '../../../../../api';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import AccomodationsSlider from './AccomodationSlider';
import MiddleInfo from './MiddleInfo';
import AccomodationItems from './AccomodationItems';
import Loader from '../../../../HOC/Loader';

class Accomodation extends React.Component {

  
  
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      loading: true
    }
  }

  

  _isMounted = false;

  componentDidMount() {

    axios.post('/accomodation/fetch', {lang: this.props.locale})
    .then(data => {
      this.setState({cats: data.data, loading: false})
    })
    .catch(err => {
      console.log(err)
    }) 
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.locale !== this.props.locale) {

      axios.post('/accomodation/fetch', {lang: this.props.locale})
      .then(data => {
        this.setState((state, props) => ({
          cats: data.data,
          loading: false
        }))
      })
      .catch(err => {
        console.log(err)
      })
     
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    console.log(this.state.cats)

    return (
      <React.Fragment>
        <Navigation />
        <AccomodationsSlider />
        <MiddleInfo />
          {this.state.loading ? <Loader /> : <AccomodationItems accomodation={this.state.cats} />} 
        
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: !localStorage.lang ? state.i18n.locale : localStorage.lang
  }
}

export default connect(mapStateToProps, null)(Accomodation);