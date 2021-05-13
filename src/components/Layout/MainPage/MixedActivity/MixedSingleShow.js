import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import MixedModal from './MixedModal';

class MixedSingleShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalInfo: ""
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
          <h1 className="cat-title">{this.props.individual.name}</h1>
          <h3 className="cat-descr">{this.props.individual.description}</h3>
        </section>
        <section className="category-cards">
          <article onClick={() => this.selectModal('Modal 1')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.individual.img1}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 2')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.individual.img2}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 3')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.individual.img3}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 4')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.individual.img4}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 5')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.individual.img5}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 6')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.individual.img6}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
        </section>
        <MixedModal
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}
            images={this.props.individual}
          />
        <div style={{display: "flex", justifyContent: "center"}}>
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.individual.direction}>Direction</a>
          </div>
          <div className="act-space"></div>
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.individual.book}>Book</a>
          </div>
        </div>
      
      </main>
    )
  }
}

export default MixedSingleShow;