import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
// components
import Loader from '../../components/Loader/Loader';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getBookStart, updateBookStart } from './booksActions';

const EditBook = () => {
  const { register, handleSubmit, setValue, errors } = useForm();

  const dispatch = useDispatch();
  const { book, loading, error } = useSelector(({ books }) => books);

  const { id } = useParams();

  const onSubmit = body => dispatch(updateBookStart({ id, body }));

  useEffect(() => {
    dispatch(getBookStart({ id }));
  }, [dispatch]);

  useEffect(() => {
    setValue('title', book.title);
    setValue('description', book.description);
    setValue('price', book.price);
  }, [book]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name='title'
        type='text'
        placeholder='title'
        ref={register({ required: true })}
      />

      {errors.title && <p>error!</p>}

      <input
        name='description'
        placeholder='description'
        ref={register({ required: true, minLength: 20 })}
      />

      {errors.description && <p>Description is to short!</p>}

      <input
        type='number'
        name='price'
        placeholder='price'
        ref={register({ required: true })}
      />
      {errors.price && <p>Price is required</p>}

      <input type='submit' value='Save' />
    </form>
  );
};

export default EditBook;
