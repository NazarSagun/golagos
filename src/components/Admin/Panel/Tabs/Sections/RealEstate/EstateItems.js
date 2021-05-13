import React, {useEffect, useState} from 'react';
import axios from '../../../../../../api';
import '../index.css';

const EstateItems = () => {

  const [estate, setEstate] = useState([])
  const [estateId, setEstateId] = useState('')
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [direction, setDirection] = useState('')

  useEffect(() => {
    axios.get('/estate')
    .then(response => setEstate(response.data))
    .catch(err => console.log(err))
  }, [])

  const onChange = e => {
    setFiles(e.target.files);
  };

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onDescrChange = e => {
    setDescription(e.target.value);
  };

  const onDirChange = e => {
    setDirection(e.target.value);
  };

  const onActTypeChange = e => {
    setEstateId(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    Array.from(files).map(file => {
      formData.append('files', file);
    });
    formData.append('mainEstateId', estateId);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('direction', direction);
    

    try {
      await axios.post('/estate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      setTitle('');
      setDescription('');
      setDirection('');
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
      <h1>Real Estate</h1>
      <div>
        <label>Title</label>
        <input type='text' value={title} onChange={onTitleChange} />
      </div>

      <div>
      <label>Type</label>
      <select value={estateId} onChange={onActTypeChange}>
      <option value="">Select type</option>
        {estate.map(estate => {
          return (
            <option key={estate.id} value={estate.id}>{estate.name}</option>
          )
        })}
      </select>
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
        <label>More Information Link</label>
        <input type='text' value={direction} onChange={onDirChange} />
      </div>
        
      <div>
        <button className="submit-btn" type='submit'>Submit</button>
      </div>
      <div className="res-message">{message}</div>
    </form>
  )
}

export default EstateItems;