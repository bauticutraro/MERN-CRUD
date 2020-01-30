const router = require('express').Router();
const bookRoute = require('./book/bookRoute');

router.use('/books', bookRoute);

module.exports = router;
