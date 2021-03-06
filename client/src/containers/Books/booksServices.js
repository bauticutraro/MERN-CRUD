import api, { requestData } from '../../utils/api';

const BOOK_URL = 'http://localhost:5000/api/v1/books';

export const getBooksService = () => api(BOOK_URL);

export const getBookService = id => api(`${BOOK_URL}/${id}`);

export const addBookService = body => requestData(BOOK_URL, 'POST', body);

export const deleteBookService = id => api(`${BOOK_URL}/${id}`, 'DELETE');

export const updateBookService = (id, body) =>
  requestData(`${BOOK_URL}/${id}`, 'PUT', body);
