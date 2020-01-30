const schedule = require('node-schedule');

module.exports = () =>
  schedule.scheduleJob('40 12 * * *', async () => {
    await BookModel.deleteMany();
  });
