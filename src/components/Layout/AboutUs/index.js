import React from 'react';

import './index.css';

import AboutSlider from './AboutSlider';
import AboutInfo from './AboutInfo';
import AboutCO from './AboutCO';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer'

class AboutUs extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <AboutSlider />
        <AboutInfo />
        <AboutCO />
        <Footer />
      </React.Fragment>
    )
  }
}

export default AboutUs;