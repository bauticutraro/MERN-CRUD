import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookStart } from './booksActions';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [inputs, setInputs] = useState({}),
    [image, setImage] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleFileChange = e => setImage(e.target.files[0]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBookStart({ ...inputs, image }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          onChange={handleInputChange}
          placeholder='title'
          required
        />

        <textarea
          name='description'
          onChange={handleInputChange}
          placeholder='description'
          required
        ></textarea>

        <input
          type='number'
          name='price'
          onChange={handleInputChange}
          placeholder='price'
          required
        />

        <input type='file' name='image' onChange={handleFileChange} />

        <button type='submit'>add</button>
      </form>

      <Link to='/'>home</Link>
    </div>
  );
};

export default AddBook;
