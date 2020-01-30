import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBookStart } from './booksActions';
import { Link } from 'react-router-dom';

const Books = () => {
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
      <Link to='/'>home</Link>
    </div>
  );
};

export default React.memo(Books);
