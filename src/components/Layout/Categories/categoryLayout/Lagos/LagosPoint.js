import React from 'react';
import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import {Link} from 'react-router-dom';
import {fetchPoints} from '../../../../../actions';
import {connect} from 'react-redux';

import Tabs from "../../../Tabs/Tabs";
import Loader from '../../../../HOC/Loader';

class LagosPoint extends React.Component {

  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchPoints();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderPoint = () => {
    
      return (
    
      <Tabs>
        {this.props.points.map((i) => (
            <div key={i.id} label={i.name}> 
              <div className="tab-container tab-lagos">
  
              <Swiper 
                spaceBetween={1}
                slidesPerView={3}
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
      )
  }

  render() {

    const render = this.props.isFetching ? <Loader /> : this.renderPoint()

    return (
      <div>
        <section>
          <h1 className="cat-title">Points of Interest</h1>
          <h3 className="cat-descr">A Village full of recognisable landmarks</h3>
        </section>
        {render}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    points: Object.values(state.data.points),
    isFetching: state.data.isPFetching
  }
}

export default connect(mapStateToProps, {fetchPoints})(LagosPoint);