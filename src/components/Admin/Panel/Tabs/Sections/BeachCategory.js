import { takeRightWhile } from 'lodash';
import React, {useState} from 'react';
import axios from '../../../../../api';

import './index.css';

const BeachCategory = () => {

  const [files, setFiles] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [message, setMessage] = useState('');

  const onChange = e => {
    setFiles(e.target.files);
  };

  const onTextChange = e => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };
  const onDirectionChange = e => {
    setDirection(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Array.from(files).map(file => {
      formData.append('files', file);
    });
    formData.append('title', title);
    formData.append('description', description);
    formData.append('direction', direction);

    try {
      await axios.post('/beaches', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });      
      
      setMessage('Form Uploaded');
      setTitle('');
      setDescription('');
      setDirection('');
      
      const timer = setTimeout(() => {
        setMessage('')
      }, 2000);
      return () => clearTimeout(timer)
    } catch (err) {
      setMessage('There was a problem with the server or you placed the same image');
      setTitle('');
      setDescription('');
      setDirection('');
      const timer = setTimeout(() => {
        setMessage('')
      }, 2000);
      return () => clearTimeout(timer)
    }
    
  };

  return (
    <React.Fragment>
      <form id="beachForm" className="main-section-form" onSubmit={onSubmit}>
        <div>
          <label>Beach Title</label>
          <input type='text' value={title} onChange={onTextChange} />
        </div>
        <div>
          <label>Beach Image</label>
          <input type='file' name="singleFile" multiple onChange={onChange} />
        </div>
        
        {/* <div>
          <label>Single Image 1</label>
          <input type='file' onChange={onChange} />
        </div>
        <div>
          <label>Single Image 2</label>
          <input type='file' onChange={onChange} />
        </div>
        <div>
          <label>Single Image 3</label>
          <input type='file' onChange={onChange} />
        </div>
        <div>
          <label>Single Image 4</label>
          <input type='file' onChange={onChange} />
        </div>
        <div>
          <label>Single Image 5</label>
          <input type='file' name="file" onChange={onChange} />
        </div>
        <div>
          <label>Single Image 6</label>
          <input type='file' name="file" onChange={onChange} />
        </div> */}
        <div>
          <label>Beach Description</label>
          <textarea style={{resize: 'vertical', outline: 'none'}} type='text' value={description} onChange={onDescriptionChange} />
        </div>
        <div>
          <label>Single Rirection</label>
          <input type='text' value={direction} onChange={onDirectionChange} />
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