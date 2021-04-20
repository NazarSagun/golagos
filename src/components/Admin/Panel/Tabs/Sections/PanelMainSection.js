import React, { useState } from 'react';
import axios from '../../../../../api';

import './index.css';

const PanelMainSection = () => {
  const [file, setFile] = useState('');
  const [englishTitle, setEnglishTitle] = useState('');
  const [germanTitle, setGermanTitle] = useState('');
  const [portugalTitle, setPortugalTitle] = useState('');
  const [message, setMessage] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
  };
  const onEnTextChange = e => {
    setEnglishTitle(e.target.value);
  };
  const onDeTextChange = e => {
    setGermanTitle(e.target.value);
  };
  const onPtTextChange = e => {
    setPortugalTitle(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('enTitle', englishTitle);
    formData.append('deTitle', germanTitle);
    formData.append('ptTitle', portugalTitle);


    try {
      await axios.post('/cat_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then((res) => {
        setMessage('Uploaded')
      }).catch((res, err) => {
        setMessage(res.message)
      })

      setMessage('File Uploaded');
    } catch (err) {
      if (err) {
        setMessage('Choose a picture please');
        console.log(err)
      } else {
        setMessage('Error');
      }
    }
    // setFile('');
    // setTitle('');
  };

  return (
    <React.Fragment>
      <form className="main-section-form" name="form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="cat_name">English Title</label>
          <input id="cat_name" type='text' value={englishTitle} onChange={onEnTextChange} />
        </div>
        <div>
          <label htmlFor="cat_name">German Title</label>
          <input id="cat_name" type='text' value={germanTitle} onChange={onDeTextChange} />
        </div>
        <div>
          <label htmlFor="cat_name">Portugal Title</label>
          <input id="cat_name" type='text' value={portugalTitle} onChange={onPtTextChange} />
        </div>
        <div>
          <label htmlFor="cat_img">Category Image</label>
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

export default PanelMainSection;