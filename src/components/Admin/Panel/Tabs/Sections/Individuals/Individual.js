import React, {useState} from 'react';
import axios from '../../../../../../api';
import '../index.css';

const IndividualItems = () => {

  const [type, setType] = useState('');
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [direction, setDirection] = useState('')
  const [book, setBook] = useState('')

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onTypeChange = e => {
    setType(e.target.value);
  };

  const onChange = e => {
    setFiles(e.target.files);
  };

  const onDescrChange = e => {
    setDescription(e.target.value);
  };

  const onDirChange = e => {
    setDirection(e.target.value);
  };

  const onBookChange = e => {
    setBook(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    Array.from(files).map(file => {
      formData.append('files', file);
    });
    formData.append('title', title);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('book', book);
    formData.append('direction', direction);
    

    try {
      await axios.post('/individual', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      setTitle('');
      setType('');
      setDescription('');
      setDirection('');
      setBook('');
      setMessage('Form Uploaded');
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
    <form style={{marginTop: '50px'}} className="main-section-form" name="form" onSubmit={onSubmit}>
      <h1>Individual Activities</h1>

      <div>
        <label htmlFor="cat_name">Title</label>
        <input id="sub_cat_name" type='text' value={title} onChange={onTitleChange} />
      </div>

      <div>
        <label htmlFor="cat_name">Type</label>
        <input id="sub_cat_name" type='text' value={type} onChange={onTypeChange} />
      </div>

      <div>
        <label>Images</label>
        <input type='file' name="files" multiple onChange={onChange} />
      </div>

      <div>
        <label>Description</label>
        <textarea type='text' value={description} onChange={onDescrChange} />
      </div>

      <div>
        <label>Direction</label>
        <input type='text' value={direction} onChange={onDirChange} />
      </div>

      <div>
        <label>Booking</label>
        <input type='text' value={book} onChange={onBookChange} />
      </div>
        
      <div>
        <button className="submit-btn" type='submit'>Submit</button>
      </div>
      <div className="res-message">{message}</div>
    </form>
  )
}

export default IndividualItems;