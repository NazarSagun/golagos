import React, {useState} from 'react';
import axios from '../../../../../../api';

import '../index.css';

import ShopItems from './ShopItems';

const ShopCategory = () => {

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const onTextChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('/main_shop', {title: title});

      setMessage('Form Uploaded');
      setTitle('');
      const timer = setTimeout(() => {
        setMessage('')
      }, 2000);
      return () => clearTimeout(timer)
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage('Error');
      }
    }
  };


  return (
    <React.Fragment>
      <form className="main-section-form" name="form" onSubmit={onSubmit}>
        <h1>Shopping Places</h1>
        <div>
          <label htmlFor="cat_name">Shoppping Title</label>
          <input id="sub_cat_name" type='text' value={title} onChange={onTextChange} />
        </div>
        
        <div>
          <button className="submit-btn" type='submit'>Submit</button>
        </div>
        <div className="res-message">{message}</div>
      </form>

      <ShopItems />
    </React.Fragment>
  );
};

export default ShopCategory;