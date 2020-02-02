import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getBooksStart, deleteBookStart } from './booksActions';
// styles
import { Button, Grid, CircularProgress } from '@material-ui/core';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/Sidebar/Sidebar';
import BookItem from '../../components/BookItem/BookItem';

const Books = ({ history: { push } }) => {
  const dispatch = useDispatch();

  const { list, loading, error } = useSelector(({ books }) => books);

  useEffect(() => {
    dispatch(getBooksStart());
  }, [dispatch]);

  const handleChangeRoute = route => push(route);

  if (loading) return <CircularProgress />;
  if (error) return <p>{error}</p>;

  return (
    <Grid items xs={12}>
      <Grid container justify='center' spacing={6}>
        {list.map((book, i) => (
          <Grid item>
            <BookItem key={book._id} {...book} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Books;
