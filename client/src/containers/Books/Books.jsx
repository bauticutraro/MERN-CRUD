import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksStart, deleteBookStart } from './booksActions';
import { Link } from 'react-router-dom';

const Books = () => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ books }) => books);

  useEffect(() => {
    dispatch(getBooksStart());
  }, [dispatch]);

  const handleDeleteBook = id => dispatch(deleteBookStart(id));

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {list.map((book, i) => (
        <div key={i} style={{ display: 'flex', padding: '1rem' }}>
          <Link to={`/${book._id}`}>{book.title}</Link>
          <Link to={`/update/${book._id}`} style={{ marginLeft: 10 }}>
            EDITAR
          </Link>
          <p
            onClick={() => handleDeleteBook(book._id)}
            style={{ margin: 0, marginLeft: 10 }}
          >
            X
          </p>
        </div>
      ))}
      <Link to='/addbook'>+ add book</Link>
    </div>
  );
};

export default Books;
