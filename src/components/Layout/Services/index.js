import React from 'react';

import './index.css';

import ServiceSlider from './ServiceSlider';
import ServiceMiddle from './ServiceMiddle';
import ServicePlanner from './ServicePlanner';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer'

class Services extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <ServiceSlider />
        <ServiceMiddle />
        <ServicePlanner />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Services;