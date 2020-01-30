import * as constants from './booksConstants';

// GET BOOKS
export const getBooksStart = () => ({
  type: constants.GET_BOOKS_START
});

export const getBooksSuccess = payload => ({
  type: constants.GET_BOOKS_SUCCESS,
  payload
});

export const getBooksFailure = payload => ({
  type: constants.GET_BOOKS_FAILURE,
  payload
});

// GET SINGLE BOOK
export const getBookStart = payload => ({
  type: constants.GET_BOOK_START,
  payload
});

export const getBookSuccess = payload => ({
  type: constants.GET_BOOK_SUCCESS,
  payload
});

export const getBookFailure = payload => ({
  type: constants.GET_BOOK_FAILURE,
  payload
});

// ADD BOOK
export const addBookStart = payload => ({
  type: constants.ADD_BOOK_START,
  payload
});

export const addBookSuccess = payload => ({
  type: constants.ADD_BOOK_SUCCESS,
  payload
});

export const addBookFailure = payload => ({
  type: constants.ADD_BOOK_FAILURE,
  payload
});

// DELETE BOOK
export const deleteBookStart = payload => ({
  type: constants.DELETE_BOOK_START,
  payload
});

export const deleteBookSuccess = payload => ({
  type: constants.DELETE_BOOK_SUCCESS,
  payload
});

export const deleteBookFailure = payload => ({
  type: constants.DELETE_BOOK_FAILURE,
  payload
});

// UPDATE BOOK
export const updateBookStart = payload => ({
  type: constants.UPDATE_BOOK_START,
  payload
});

export const updateBookSuccess = payload => ({
  type: constants.UPDATE_BOOK_SUCCESS,
  payload
});

export const updateBookFailure = payload => ({
  type: constants.UPDATE_BOOK_FAILURE,
  payload
});
