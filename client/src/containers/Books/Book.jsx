import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getBookStart } from './booksActions';

const Book = () => {
  const dispatch = useDispatch();

  const { book, loading, error } = useSelector(({ books }) => books);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getBookStart({ id }));
  }, [dispatch, id]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>loading</p>;

  return (
    <div>
      <p>{book.title}</p>
      <p> {book.description}</p>
      <p>{book.price}</p>
      {book.file && <img src={book.file} alt='' style={{ width: '200px' }} />}
      <Link to='/'>home</Link>
    </div>
  );
};

export default Book;
