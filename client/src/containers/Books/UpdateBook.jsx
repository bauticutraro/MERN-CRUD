import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getBookStart, updateBookStart } from './booksActions';

const UpdateBook = () => {
  const dispatch = useDispatch();
  const { book, loading, error } = useSelector(({ books }) => books);

  const { id } = useParams();

  useEffect(() => dispatch(getBookStart({ id })), [dispatch]);

  const [inputs, setInputs] = useState({});

  useEffect(() => setInputs({ ...book }), [book]);

  const handleInputChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBookStart({ id, body: inputs }));
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          onChange={handleInputChange}
          value={inputs.title}
          placeholder='title'
          required
        />

        <textarea
          name='description'
          onChange={handleInputChange}
          value={inputs.description}
          placeholder='description'
          required
        ></textarea>

        <input
          type='number'
          name='price'
          onChange={handleInputChange}
          value={inputs.price}
          placeholder='price'
          required
        />

        <button type='submit'>update</button>
      </form>
      <Link to='/'>home</Link>
    </div>
  );
};

export default UpdateBook;
