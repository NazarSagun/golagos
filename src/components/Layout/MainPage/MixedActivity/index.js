import React from 'react';
//import Slider
import { Swiper, SwiperSlide } from 'swiper/react';

import './index.css';

class MixedActivity extends React.Component {
  render() {
    return (
      <div className="mixed-slider">
        <Swiper
          spaceBetween={1}
          slidesPerView={4}
        >
          <SwiperSlide>
            <div className="mixed-slider-item">
              <img className="mixed-slider-img" src={'images/categories/main-page.jpg'} />
              <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
              <h4>Surf flow training</h4>
              <h5>Sports</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="mixed-slider-item">
              <img className="mixed-slider-img" src={'images/categories/main-page.jpg'} />
              <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
              <h4>Surf flow training</h4>
              <h5>Sports</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="mixed-slider-item">
              <img className="mixed-slider-img" src={'images/categories/main-page.jpg'} />
              <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
              <h4>Surf flow training</h4>
              <h5>Sports</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="mixed-slider-item">
              <img className="mixed-slider-img" src={'images/categories/main-page.jpg'} />
              <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
              <h4>Surf flow training</h4>
              <h5>Sports</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }
}

export default MixedActivity;