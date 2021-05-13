import React, {useEffect, useState} from 'react';
import axios from '../../../../../../api';
import '../index.css';

const LearnItems = () => {

  const [learns, setLearns] = useState([])
  const [learnId, setLearnId] = useState('')
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [direction, setDirection] = useState('')
  const [book, setBook] = useState('')

  useEffect(() => {
    axios.get('/main_learn')
    .then(response => setLearns(response.data))
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

  const onBookChange = e => {
    setBook(e.target.value);
  };

  const onActTypeChange = e => {
    setLearnId(e.target.value);
    console.log(learnId)
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    Array.from(files).map(file => {
      formData.append('files', file);
    });
    formData.append('mainLearnId', learnId);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('book', book);
    formData.append('direction', direction);
    

    try {
      await axios.post('/learn', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      setTitle('');
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
      <h1>Learn Items</h1>
      <div>
        <label>Learn Title</label>
        <input type='text' value={title} onChange={onTitleChange} />
      </div>

      <div>
      <label>Learn Type</label>
      <select value={learnId} onChange={onActTypeChange}>
      <option value="">Select type</option>
        {learns.map(learn => {
          return (
            <option key={learn.id} value={learn.id}>{learn.name}</option>
          )
        })}
      </select>
      </div>

      <div>
        <label>Learn Images</label>
        <input type='file' name="files" multiple onChange={onChange} />
      </div>

      <div>
        <label>Learn Description</label>
        <textarea type='text' value={description} onChange={onDescrChange} />
      </div>

      <div>
        <label>Learn Direction</label>
        <input type='text' value={direction} onChange={onDirChange} />
      </div>

      <div>
        <label>Learn Booking</label>
        <input type='text' value={book} onChange={onBookChange} />
      </div>
        
      <div>
        <button className="submit-btn" type='submit'>Submit</button>
      </div>
      <div className="res-message">{message}</div>
    </form>
  )
}

export default LearnItems;