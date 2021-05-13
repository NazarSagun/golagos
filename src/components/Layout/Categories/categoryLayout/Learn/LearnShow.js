import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Modal from './LearnModal';

class LearnShow extends React.Component {

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
          <h1 className="cat-title">{this.props.learnSingle.name}</h1>
          <h3 className="cat-descr">{this.props.learnSingle.description}</h3>
        </section>
        <section className="category-cards">
          <article onClick={() => this.selectModal('Modal 1')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.learnSingle.img1}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 2')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.learnSingle.img2}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 3')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.learnSingle.img3}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 4')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.learnSingle.img4}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 5')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.learnSingle.img5}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 6')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.learnSingle.img6}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
        </section>
        <Modal
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}
            images={this.props.learnSingle}
          />
        <div style={{display: "flex", justifyContent: "center"}}>
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.learnSingle.direction}>Direction</a>
          </div>
          <div className="act-space"></div>
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.learnSingle.book}>Book</a>
          </div>
        </div>
      
      </main>
    )
  }
}

export default LearnShow;