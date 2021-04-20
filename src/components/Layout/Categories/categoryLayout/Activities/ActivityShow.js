import React from 'react';
import '../Beaches/index.css'
import '../../../MainPage/MainSliders/MainSlider/MainSlider.css';

import SwiperCore, {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Modal from './ActivityModal';

SwiperCore.use([Navigation])

class ActivityShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalInfo: ""
    }
  }

  render() {
    return (
      <main>
        <div className="slider-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination
        >
          <SwiperSlide><img src={'images/categories/main-page.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={'images/categories/main-page.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={'images/categories/main-page.jpg'} /></SwiperSlide>
          <SwiperSlide><img src={'images/categories/main-page.jpg'} /></SwiperSlide>
        </Swiper>
      </div>
      <section>
        <h1 className="cat-title">{this.props.activity.name}</h1>
        <h3 className="cat-descr">{this.props.activity.description}</h3>
      </section>
      <section className="beach-cards">
        <article onClick={() => this.selectModal('Modal 1')} className="beach-single-container">
          <div>
            <img className="beaches-img" src={`images/categories/${this.props.activity.img1}`} />
            <img className="beach-size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 2')} className="beach-single-container">
          <div>
            <img className="beaches-img" src={`images/categories/${this.props.activity.img2}`} />
            <img className="beach-size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 3')} className="beach-single-container">
          <div>
            <img className="beaches-img" src={`images/categories/${this.props.activity.img3}`} />
            <img className="beach-size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 4')} className="beach-single-container">
          <div>
            <img className="beaches-img" src={`images/categories/${this.props.activity.img4}`} />
            <img className="beach-size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 5')} className="beach-single-container">
          <div>
            <img className="beaches-img" src={`images/categories/${this.props.activity.img5}`} />
            <img className="beach-size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 6')} className="beach-single-container">
          <div>
            <img className="beaches-img" src={`images/categories/${this.props.activity.img6}`} />
            <img className="beach-size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
      </section>
      <Modal
          displayModal={this.state.modal}
          modalInfo={this.state.modalInfo}
          closeModal={this.selectModal}
          images={this.props.activity}
        />
      <div style={{display: "flex", justifyContent: "center"}}>
        <div className="act-button">
          <a target="_blank" rel="noopener noreferrer" href={this.props.activity.direction}>Direction</a>
        </div>
        <div className="act-space"></div>
        <div className="act-button">
          <a target="_blank" rel="noopener noreferrer" href={this.props.activity.book}>Book</a>
        </div>
      </div>
      </main>
    )
  }
}

export default ActivityShow;