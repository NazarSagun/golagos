import React from 'react';
import './index.css';

import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import Tabs from "../../../Tabs/Tabs";

class PointItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        
        <Tabs>
          {this.props.points.map((i) => (
              <div key={i.id} label={i.name}> 
                <div className="tab-container tab-lagos">
    
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
                {i.point_items.map((a) => (
                  <SwiperSlide key={a.id}>
                    <Link  to={`/Point/${a.id}`}>
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
       
        
      </React.Fragment> 
    )
  }
}

export default PointItems;