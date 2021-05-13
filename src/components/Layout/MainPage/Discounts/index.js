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
            spaceBetween={0}
            slidesPerView={5}
          >
            <SwiperSlide>
              <div className="discount-slider">
                <div>
                  <img className="dis-img" src={'images/icons/dis1.png'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                </div> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <div>
                  <img className="dis-img" src={'images/icons/dis2.png'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <div>
                  <img className="dis-img" src={'images/icons/dis3.png'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <div>
                  <img className="dis-img" src={'images/icons/dis4.png'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                  <img className="discount-plus" src={'images/icons/add.svg'} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-slider">
                <div>
                  <img className="dis-img" src={'images/icons/dis5.png'} />
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
      </div>
    )
  }
}

export default Discounts;