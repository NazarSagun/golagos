import React from 'react';
//import Slider
import { Swiper, SwiperSlide } from 'swiper/react';

import './index.css';

class Discounts extends React.Component {
  render() {
    return (
      <div className="discount-container">
        <h2>Get Discounts with us</h2>
        <span>Our Partners</span>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
          >
            <SwiperSlide>
              <div className="discount-slider">
                <img src={'images/icons/discount.png'} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <img src={'images/icons/discount.png'} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <img src={'images/icons/discount.png'} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <img src={'images/icons/discount.png'} /> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <img src={'images/icons/discount.png'} /> 
              </div>
            </SwiperSlide>
            
          </Swiper>
      </div>
    )
  }
}

export default Discounts;