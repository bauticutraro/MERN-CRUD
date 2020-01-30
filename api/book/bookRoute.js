const router = require('express').Router();

// class
const BookController = require('./bookController');
const bookController = new BookController();

router
  .route('/')
  // @desc    Get books
  // @route   GET /api/v1/books
  // @access  Public
  .get(bookController.getBooks)
  // @desc    Create book
  // @route   POST /api/v1/books
  // @access  Public
  .post(bookController.createBook);

router
  .route('/:id')
  // @desc    Get single book
  // @route   GET /api/v1/books/:id
  // @access  Public
  .get(bookController.getBook)
  // @desc    Update book
  // @route   PUT /api/v1/books/:id
  // @access  Public
  .put(bookController.updateBook)
  // @desc    Delete book
  // @route   DELETE /api/v1/books/:id
  // @access  Public
  .delete(bookController.deleteBook);

module.exports = router;
