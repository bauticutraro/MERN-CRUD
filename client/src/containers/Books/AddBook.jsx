import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookStart } from './booksActions';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBookStart(inputs));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          onChange={e => handleInputChange(e)}
          placeholder='title'
          required
        />

        <textarea
          name='description'
          onChange={e => handleInputChange(e)}
          placeholder='description'
          required
        ></textarea>

        <input
          type='number'
          name='price'
          onChange={e => handleInputChange(e)}
          placeholder='price'
          required
        />

        <button type='submit'>add</button>
      </form>

      <Link to='/'>home</Link>
    </div>
  );
};

export default AddBook;
