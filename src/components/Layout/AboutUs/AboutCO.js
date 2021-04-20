import React from 'react'
import './index.css';

import SwiperCore, {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation])

class AboutCO extends React.Component {

  render() {
    return (
      <section className="CO-section">
        <div className="CO-container">
          <div className="CO-left">
            <img src={'images/icons/double-quotes.png'} />
            <h5>It has survived not only five centuries, remaining essentially unchanged.</h5>
            <span className="ceo-character">TARAS CHOLIY</span><span className="ceo">-CO-Founder & CEO</span>
          </div>
          <div className="CO-right">
            <img src={'images/icons/double-quotes.png'} />
          </div>
        </div>
      </section>
    )
  }
}

export default AboutCO;