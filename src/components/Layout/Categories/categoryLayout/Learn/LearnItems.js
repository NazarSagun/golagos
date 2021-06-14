import React from 'react';
import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import {Link} from 'react-router-dom';

import Tabs from "../../../Tabs/Tabs";

class LearnItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

      return (

        <Tabs>
        {this.props.learn.map((i) => (
            <div key={i.id} label={i.name}> 
              <div className="tab-container">
  
              <Swiper 
                breakpoints={{
                  375: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={1}
              >
              {i.learn_items.map((a) => (
                <SwiperSlide key={a.id}>
                  <Link  to={`/Learn/${a.id}`}>
                    <div className="mixed-slider-item">
                      <img className="mixed-slider-img" src={'images/categories/main-page.jpg'} />
                      <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
                      <h4>{a.name}</h4>
                    </div>
                  </Link>
                </SwiperSlide>

              ))}
              </Swiper>
              </div> 
            </div>
        ))}
      </Tabs>
    ) 
  }
}

export default LearnItems;


  