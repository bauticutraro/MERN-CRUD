require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
const express = require('express');
const colors = require('colors');
const rateLimit = require('express-rate-limit');
const cleanDB = require('./utils/cleanDB');
const app = express();

const PORT = process.env.PORT || 5000;

require('./utils/db')();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// security
app.use(require('helmet')());
app.use(require('xss-clean')());

// Rate limiting
const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000, // 10 mins
  max: 1000
});

app.use(limiter);

app.use(require('hpp')());
app.use(require('cors')());

app.use('/api/v1', require('./api'));

cleanDB();

if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'));

app.get('/', (_, res) => res.sendStatus(200));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan.bold);
});
