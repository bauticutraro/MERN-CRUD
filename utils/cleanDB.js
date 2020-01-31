const schedule = require('node-schedule');

module.exports = () =>
  schedule.scheduleJob('59 23 * * *', async () => await BookModel.deleteMany());
