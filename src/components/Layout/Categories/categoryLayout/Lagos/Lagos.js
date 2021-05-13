import React from 'react';
import './index.css';

import Navigation from '../../../Navigation/Navigation';
import Footer from '../../../Footer/index';
import LagosSlider from './LagosSlider';
import LagosBeach from './LagosBeach';
import LagosPoint from './LagosPoint';
import MiddleInfo from './MiddleInfo';


class Lagos extends React.Component {
  
  render() {

    return (
      <React.Fragment>
        <Navigation />
        <LagosSlider />
        <MiddleInfo />
        <LagosBeach />
        <LagosPoint />
        <Footer />
      </React.Fragment>
    )
  }
}



export default Lagos;