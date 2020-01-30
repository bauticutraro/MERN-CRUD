import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as services from './booksServices';
import * as constants from './booksConstants';
import * as actions from './booksActions';
import { push } from 'connected-react-router';

// GET BOOKS
function* getBooks() {
  try {
    const { books } = yield services.getBooksService();
    if (books) yield put(actions.getBooksSuccess({ list: books }));
  } catch (err) {
    yield put(actions.getBooksFailure({ error: err.message }));
  }
}

function* getBooksSaga() {
  yield takeLatest(constants.GET_BOOKS_START, getBooks);
}

// GET BOOK
function* getBook({ payload: { id } }) {
  try {
    const { book } = yield services.getBookService(id);
    if (book) yield put(actions.getBookSuccess({ book }));
  } catch (err) {
    yield put(actions.getBookFailure({ error: err.message }));
  }
}

function* getBookSaga() {
  yield takeLatest(constants.GET_BOOK_START, getBook);
}

// ADD BOOK
function* addBook({ payload }) {
  try {
    const { book } = yield services.addBookService(payload);

    if (book) {
      yield put(actions.addBookSuccess());
      yield put(push('/'));
    }
  } catch (err) {
    yield put(actions.addBookFailure({ error: err.message }));
  }
}

function* addBookSaga() {
  yield takeLatest(constants.ADD_BOOK_START, addBook);
}

// DELETE BOOK
function* deleteBook({ payload }) {
  try {
    yield services.deleteBookService(payload);
    yield getBooks();
  } catch (err) {
    yield put(actions.deleteBookFailure({ error: err.message }));
  }
}

function* deleteBookSaga() {
  yield takeLatest(constants.DELETE_BOOK_START, deleteBook);
}

// UPDATE BOOK
function* updateBook({ payload: { id, body } }) {
  try {
    yield services.updateBookService(id, body);
    yield put(push('/'));
    yield getBooks();
  } catch (err) {
    yield put(actions.updateBookFailure({ error: err.message }));
  }
}

function* updateBookSaga() {
  yield takeLatest(constants.UPDATE_BOOK_START, updateBook);
}

export default function* booksSaga() {
  yield all([
    fork(getBooksSaga),
    fork(getBookSaga),
    fork(addBookSaga),
    fork(updateBookSaga),
    fork(deleteBookSaga)
  ]);
}
