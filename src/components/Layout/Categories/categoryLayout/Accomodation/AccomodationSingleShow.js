import React from 'react';
import './index.css';
import '../../../MainPage/MainSliders/MainSlider/MainSlider.css';
import { connect } from 'react-redux';

import axios from '../../../../../api';

import SwiperCore, {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import AccomodationModal from './AccomodationModal';


SwiperCore.use([Navigation])

class AccomodationSingleShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalInfo: "",
      cat: []
    }
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.locale !== this.props.locale) {

      axios.post(`/accomodation/${this.props.accomodation.name}`)
      .then(data => {
        this.setState((state, props) => ({
          cat: data.data,
          loading: false
        }))
      })
      .catch(err => {
        console.log(err)
      })
     
    }
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
    });
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
        <h1 className="cat-title">{this.props.accomodation.name}</h1>
        <h3 className="cat-descr">{this.props.accomodation.description}</h3>
      </section>
      <section className="category-cards">
        <article onClick={() => this.selectModal('Modal 1')} className="single-container">
          <div>
            <img className="cards-img" src={`images/categories/${this.props.accomodation.img1}`} />
            <img className="size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 2')} className="single-container">
          <div>
            <img className="cards-img" src={`images/categories/${this.props.accomodation.img2}`} />
            <img className="size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 3')} className="single-container">
          <div>
            <img className="cards-img" src={`images/categories/${this.props.accomodation.img3}`} />
            <img className="size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 4')} className="single-container">
          <div>
            <img className="cards-img" src={`images/categories/${this.props.accomodation.img4}`} />
            <img className="size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 5')} className="single-container">
          <div>
            <img className="cards-img" src={`images/categories/${this.props.accomodation.img5}`} />
            <img className="size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
        <article onClick={() => this.selectModal('Modal 6')} className="single-container">
          <div>
            <img className="cards-img" src={`images/categories/${this.props.accomodation.img6}`} />
            <img className="size-icon" src="/images/icons/full-size.png" />
          </div>
        </article>
      </section>
      <AccomodationModal
          displayModal={this.state.modal}
          modalInfo={this.state.modalInfo}
          closeModal={this.selectModal}
          images={this.props.accomodation}
        />
      <div style={{display: "flex", justifyContent: "center"}}>
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.accomodation.direction}>Direction</a>
          </div>
          <div className="act-space"></div>
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.accomodation.book}>Book</a>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: !localStorage.lang ? state.i18n.locale : localStorage.lang
  }
}

export default connect(mapStateToProps, null)(AccomodationSingleShow);