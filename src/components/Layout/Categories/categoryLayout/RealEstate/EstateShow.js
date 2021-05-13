import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Modal from './EstateModal';

class EstateShow extends React.Component {

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
          <h1 className="cat-title">{this.props.estate.name}</h1>
          <h3 className="cat-descr">{this.props.estate.description}</h3>
        </section>
        <section className="category-cards">
          <article onClick={() => this.selectModal('Modal 1')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.estate.img1}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 2')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.estate.img2}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 3')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.estate.img3}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 4')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.estate.img4}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 5')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.estate.img5}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
          <article onClick={() => this.selectModal('Modal 6')} className="single-container">
            <div>
              <img className="cards-img" src={`images/categories/${this.props.estate.img6}`} />
              <img className="size-icon" src="/images/icons/full-size.png" />
            </div>
          </article>
        </section>
        <Modal
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}
            images={this.props.estate}
          />
        
          <div className="act-button">
            <a target="_blank" rel="noopener noreferrer" href={this.props.estate.direction}>More Information</a>
          </div>
        
      
      
      </main>
    )
  }
}

export default EstateShow;