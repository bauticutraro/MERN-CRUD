import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getBookStart, updateBookStart } from './booksActions';

import {
  Container,
  FormControl,
  TextField,
  Button,
  FormLabel
} from '@material-ui/core';

const EditBook = () => {
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
    <Container margin='normal'>
      <FormControl onSubmit={handleSubmit} fullWidth>
        <FormLabel>Title</FormLabel>
        <TextField
          type='text'
          name='title'
          margin='normal'
          onChange={handleInputChange}
          value={inputs.title}
          placeholder='title'
          required
          fullWidth
        />

        <FormLabel>Description</FormLabel>

        <TextField
          name='description'
          margin='normal'
          onChange={handleInputChange}
          value={inputs.description}
          placeholder='description'
          required
        />

        <FormLabel>Price</FormLabel>

        <TextField
          type='number'
          name='price'
          margin='normal'
          onChange={handleInputChange}
          value={inputs.price}
          placeholder='price'
          required
        />

        <Button variant='contained' color='primary' type='submit'>
          update
        </Button>
      </FormControl>
      <Link to='/'>home</Link>
    </Container>
  );
};

export default EditBook;
