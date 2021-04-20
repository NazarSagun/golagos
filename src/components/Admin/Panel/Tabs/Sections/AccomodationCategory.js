import React, { useState } from 'react';
import axios from '../../../../../api';

import './index.css';

const AccomodationCategory = () => {
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
      const res = await axios.post('/sub_accomodation_cat_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      if (res.status === 200) {
        setMessage('File Uploaded');
      }
    } catch (err) {
      if (err) {
        setMessage('Choose a picture please');
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
          <label htmlFor="cat_name">Accomodation Category Title</label>
          <input id="cat_name" type='text' value={title} onChange={onTextChange} />
        </div>
        <div>
          <label htmlFor="cat_img">Accomodation Category Image</label>
          <input id="cat_img" type='file' onChange={onChange} />
        </div>
        <div>
          <button className="submit-btn" type="submit">Submit</button>
        </div>
        
        {message ? <div style={{color: '#306B34'}}>{message}</div> : null}
      </form>
    </React.Fragment>
  );
};

export default AccomodationCategory;