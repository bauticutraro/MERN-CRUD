import * as constants from './booksConstants';

const initialState = {
  list: [],
  book: {},
  error: null,
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_BOOKS_START:
    case constants.GET_BOOK_START:
    case constants.ADD_BOOK_START:
    case constants.UPDATE_BOOK_START:
    case constants.DELETE_BOOK_START:
      return { ...state, loading: true, error: null };

    case constants.GET_BOOKS_SUCCESS:
      return { ...state, loading: false, error: null, list: payload.list };
    case constants.GET_BOOK_SUCCESS:
      return { ...state, loading: false, error: null, book: payload.book };
    case constants.ADD_BOOK_SUCCESS:
    case constants.UPDATE_BOOK_SUCCESS:
    case constants.DELETE_BOOK_SUCCESS:
      return { ...state, loading: false, error: null };

    case constants.GET_BOOKS_FAILURE:
      return { ...state, loading: false, error: payload.error, list: [] };
    case constants.GET_BOOK_FAILURE:
      return { ...state, loading: false, error: payload.error, product: {} };
    case constants.ADD_BOOK_FAILURE:
    case constants.UPDATE_BOOK_FAILURE:
    case constants.DELETE_BOOK_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};
