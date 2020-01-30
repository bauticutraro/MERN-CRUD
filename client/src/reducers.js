import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// reducers
import booksReducer from './containers/Books/booksReducer';

export default history =>
  combineReducers({
    books: booksReducer,
    router: connectRouter(history)
  });
