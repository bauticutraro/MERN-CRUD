import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
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

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name='title'
        type='text'
        margin='normal'
        placeholder='title'
        ref={register({ required: true })}
      />

      {errors.title && <p>error!</p>}

      <input
        name='description'
        margin='normal'
        placeholder='description'
        ref={register({ required: true, minLength: 20 })}
      />

      {errors.description && <p>Description is to short!</p>}

      <input
        type='number'
        name='price'
        margin='normal'
        placeholder='price'
        ref={register({ required: true })}
      />
      {errors.description && <p>Description is to short!</p>}

      <input type='submit'>update</input>
      <Link to='/'>home</Link>
    </form>
  );
};

export default EditBook;
