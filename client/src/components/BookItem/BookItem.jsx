import React from 'react';
import { useHistory } from 'react-router-dom';
import { Delete, Edit } from '@material-ui/icons';
// redux
import { useDispatch } from 'react-redux';
import { deleteBookStart } from '../../containers/Books/booksActions';

const BookItem = ({ _id, title, price, description, file: image }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeleteBook = id => dispatch(deleteBookStart(id));
  const handleChangeRoute = id => history.push(`/edit/${id}`);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <img
          src={
            image ||
            'https://clipartart.com/images/a-lot-of-books-clipart-6.png'
          }
          width={150}
          height={170}
          alt=''
        />
      </div>
      <span>{description}</span>
      <h4>${price}</h4>
      <div>
        <Edit onClick={() => handleChangeRoute(_id)} />
        <Delete onClick={() => handleDeleteBook(_id)} />
      </div>
    </div>
  );
};

export default React.memo(BookItem);
