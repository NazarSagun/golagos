import React from 'react';
//import Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from '../../../HOC/Loader';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {fetchIndividuals} from '../../../../actions';

import './index.css';

class MixedActivity extends React.Component {

  componentDidMount() {
    this.props.fetchIndividuals();
  }

  renderContent() {
    return (
      <div className="mixed-slider">
        <Swiper
          spaceBetween={1}
          slidesPerView={4}
        >
          {this.props.individuals.map(i => (
          <SwiperSlide key={i.id}>
            <Link to={`/Individual/${i.id}`}>
              <div className="mixed-slider-item">
                <img className="mixed-slider-img" src={`/images/categories/${i.img}`} />
                <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
                <h4>{i.name}</h4>
                <h5>{i.type}</h5>
              </div>
            </Link>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

  render() {

    const render = this.props.isFetching ? <Loader /> : this.renderContent();

    return (
      <div>{render}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    individuals: Object.values(state.data.individual),
    isFetching: state.data.isIFetching
  }
}

export default connect(mapStateToProps, {fetchIndividuals})(MixedActivity);