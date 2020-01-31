const BookModel = require('./bookModel');
const aws = require('../../utils/aws');

class BookController {
  async getBooks(_, res) {
    try {
      const books = await BookModel.find({});
      return res.status(200).json({ books });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async getBook(req, res) {
    const { id } = req.params;
    try {
      const book = await BookModel.findById(id);

      if (!book)
        return res.status(404).json({
          error: `Book with id ${id} not found`
        });

      return res.status(200).json({ book });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async createBook(req, res) {
    try {
      const upload = await aws('books', req.file);
      let file;

      if (upload.success) file = upload.uri;

      const book = await BookModel.create({
        ...req.body,
        file
      });

      return res.status(200).json({ book, file });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async updateBook(req, res) {
    const { id } = req.params,
      { title, price, description } = req.body;
    try {
      let book = await BookModel.findById(id);

      if (!book)
        return res.status(404).json({
          error: `Book with id ${id} not found`
        });

      book.title = title || book.title;
      book.price = price || book.price;
      book.description = description || book.description;

      await book.save();
      return res.status(200).json({ book });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async deleteBook(req, res) {
    const { id } = req.params;
    try {
      const book = await BookModel.findById(id);

      if (!book)
        return res.status(404).json({
          success: false,
          data: `Book with id ${id} not found`
        });

      await book.remove();

      return res.status(200).send({ status: 'OK' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = BookController;
