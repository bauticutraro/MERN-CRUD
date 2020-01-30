const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected'.cyan.bold);
  } catch (err) {
    console.log('Error DB'.red.bold, err);
  }
};
