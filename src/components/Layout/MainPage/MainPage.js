import React, { Fragment } from 'react';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
import MainSlider from './MainSliders/MainSlider/MainSlider';
import MainCategories from './MainCategories';
import MixedActivity from './MixedActivity';
import Discounts from './Discounts';
import VideoContainer from './VideoContainer';

export default class MainPage extends React.Component {

  render() {

    return (
      <Fragment>
        <Navigation />
        <MainSlider />
        <MainCategories />
        <MixedActivity />
        <Discounts />
        <VideoContainer />
        <Footer />
      </Fragment>
    )
  }
}