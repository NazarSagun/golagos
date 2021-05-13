import React from 'react';
import './index.css';

const Modal = props => {
  function displayInfo() {
    switch(props.modalInfo) {
      case 'Modal 1':
        return <img className="modal-info" src={`/images/categories/${props.images.img1}`} />
      case 'Modal 2':
        return <img className="modal-info" src={`/images/categories/${props.images.img2}`} />
      case 'Modal 3':
        return <img className="modal-info" src={`/images/categories/${props.images.img3}`} />
      case 'Modal 4':
        return <img className="modal-info" src={`/images/categories/${props.images.img4}`} />
      case 'Modal 5':
        return <img className="modal-info" src={`/images/categories/${props.images.img5}`} />
      case 'Modal 6':
        return <img className="modal-info" src={`/images/categories/${props.images.img6}`} />
      default:
        return null
        
    }
  }

  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }

  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };

  return (
    <div 
      className="modal"
      onClick={ closeModal }
      style={divStyle}>

      <div className="modal-content"
        onClick={ e => e.stopPropagation() }>
          
        <span 
          className="close"
          onClick={ closeModal }>&times;
        </span>

        <div className="modal-flex">
          {displayInfo()}
        </div>

      </div>

    </div>
  )
}

export default Modal;