import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getBookStart, updateBookStart } from './booksActions';

const UpdateBook = () => {
  const dispatch = useDispatch();
  const { book, loading, error } = useSelector(({ books }) => books);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getBookStart({ id }));
  }, [dispatch, id]);

  const { title, description, price } = book;

  const [inputs, setInputs] = useState({
    title,
    description,
    price
  });

  const handleInputChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBookStart({ id, body: inputs }));
  };

  if (error) return <p>{error}</p>;
  if (loading) return <p>loading</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          onChange={e => handleInputChange(e)}
          value={inputs.title}
          placeholder='title'
          required
        />

        <textarea
          name='description'
          onChange={e => handleInputChange(e)}
          value={inputs.description}
          placeholder='description'
          required
        ></textarea>

        <input
          type='number'
          name='price'
          onChange={e => handleInputChange(e)}
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
