const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
    minlength: 3,
    unique: true
  },
  author: {
    name: {
      type: String,
      require: true
    }
  },
  description: {
    type: String,
    require: true,
    minlength: 10
  },
  price: {
    type: Number,
    require: true
  },
  file: {
    type: String
  }
});

module.exports = BookModel = model('Book', BookSchema);
