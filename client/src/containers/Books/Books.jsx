import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getBooksStart, deleteBookStart } from './booksActions';
// styles
import { Grid, CircularProgress } from '@material-ui/core';
import BookItem from '../../components/BookItem/BookItem';
import Loader from '../../components/Loader/Loader';

const Books = ({ history: { push } }) => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ books }) => books);

  useEffect(() => {
    dispatch(getBooksStart());
  }, [dispatch]);

  const handleChangeRoute = useCallback(route => push(route));

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <Grid items xs={12}>
      <Grid container justify='center' spacing={6}>
        {list.map((book, i) => (
          <Grid item>
            <BookItem
              key={book._id}
              handleChangeRoute={handleChangeRoute}
              {...book}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Books;
