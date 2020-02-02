import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { addBookStart } from './booksActions';

const AddBook = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    defaultValues: { image: {} }
  });
  const [image, setImage] = useState({});

  const dispatch = useDispatch();

  const onSubmit = data => dispatch(addBookStart({ ...data, image }));

  const handleImage = ({ target }) => setImage(target.files[0]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
      <input
        type='text'
        name='title'
        placeholder='title'
        ref={register({ required: true })}
      />
      {errors.title && <p>Title required!</p>}

      <input
        name='description'
        placeholder='description'
        ref={register({ required: true /*minLength: 20 */ })}
      />
      {errors.description && <p>Description required</p>}

      <input
        type='number'
        name='price'
        placeholder='price'
        ref={register({ required: true })}
      />
      {errors.price && <p>Price required</p>}
      <input type='file' name='image' onChange={handleImage} />

      <button type='submit'>Add</button>
    </form>
  );
};

export default AddBook;
