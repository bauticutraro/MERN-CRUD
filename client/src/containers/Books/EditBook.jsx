import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
// components
import Loader from '../../components/Loader/Loader';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getBookStart, updateBookStart } from './booksActions';

const EditBook = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [image, setImage] = useState({});

  const dispatch = useDispatch();
  const { book, loading, error } = useSelector(({ books }) => books);

  const { id } = useParams();

  const onSubmit = body =>
    dispatch(updateBookStart({ id, body: { ...body, image } }));

  const handleChangeImage = ({ target }) => setImage(target.files[0]);

  useEffect(() => {
    dispatch(getBookStart({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    setValue('title', book.title);
    setValue('description', book.description);
    setValue('price', book.price);
  }, [book, setValue]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  console.log(image.name);
  // console.log(URL.createObjectURL(image));

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

      <img
        src={image.name ? URL.createObjectURL(image) : book.file}
        width={50}
        height={50}
      />

      <input type='file' name='image' onChange={handleChangeImage} />

      <input type='submit' value='Save' />
    </form>
  );
};

export default EditBook;
