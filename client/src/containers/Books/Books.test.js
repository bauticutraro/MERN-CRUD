import * as actions from './booksActions';
import * as constants from './booksConstants';

test('should generate an Books start action', () => {
  const result = actions.getBooksStart({ type: constants.GET_BOOKS_START });
  expect(result).toEqual({ type: 'app/Books/GET_BOOKS_START' });
});

test('should get books success', () => {
  const books = ['B1', 'B2', 'B3'];
  const result = actions.getBooksSuccess({
    type: constants.GET_BOOKS_SUCCESS,
    payload: { books }
  });
  const type = 'app/Books/GET_BOOKS_SUCCESS';

  expect(result).toEqual({ type, payload: { type, payload: { books } } });
});

test('should add book start', () => {
  const result = actions.addBookStart({ type: constants.ADD_BOOK_START });
  const type = 'app/Books/ADD_BOOK_START';
  expect(result).toEqual({ type, payload: { type } });
});
