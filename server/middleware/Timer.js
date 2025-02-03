const schedule = require("node-schedule");
const axios = require("axios");

const rule = new schedule.RecurrenceRule();
rule.second = new schedule.Range(0, 59, 35);

const Timer = () => {
  schedule.scheduleJob(rule, () => {
    axios
      .get("https://tp-rsvp-api.onrender.com/search/wake")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = { Timer };
