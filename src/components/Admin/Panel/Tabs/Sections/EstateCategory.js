import React, {useState} from 'react';
import axios from '../../../../../api';

import './index.css';

const BeachCategory = () => {

  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
  };
  const onTextChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      await axios.post('/sub_estate_cat_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      setMessage('Form Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage('Error');
      }
    }
    setFile('');
    setTitle('');
  };


  return (
    <React.Fragment>
      <form className="main-section-form" name="form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="cat_name">Real Estate Title</label>
          <input id="sub_cat_name" type='text' value={title} onChange={onTextChange} />
        </div>
        <div>
          <label htmlFor="cat_img">Real Estate Image</label>
          <input id="sub_cat_img" type='file' onChange={onChange} />
        </div>
        
        <div>
          <button className="submit-btn" type='submit'>Submit</button>
        </div>
        {message ? <div>{message}</div> : null}
      </form>
    </React.Fragment>
  );
};

export default BeachCategory;