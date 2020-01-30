import { all, fork } from 'redux-saga/effects';

// sagas
import booksSaga from './containers/Books/booksSaga';

export default function* root() {
  yield all([fork(booksSaga)]);
}
