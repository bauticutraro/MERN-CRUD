import React, { useEffect, useCallback } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getBooksStart } from './booksActions';
// styles
import BookItem from '../../components/BookItem/BookItem';
import Loader from '../../components/Loader/Loader';

const Books = ({ history: { push } }) => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ books }) => books);

  useEffect(() => {
    dispatch(getBooksStart());
  }, [dispatch]);

  const handleChangeRoute = useCallback(route => push(route), [push]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {list.map((book, i) => (
        <BookItem
          key={book._id}
          handleChangeRoute={handleChangeRoute}
          {...book}
        />
      ))}
    </div>
  );
};

export default Books;
