const schedule = require('node-schedule')
const axios = require('axios')

const Timer = () => {
    schedule.scheduleJob('*/5 * * * *', () => {
        axios.get('https://ss-rsvp-api.onrender.com/search/wake')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    })
}

module.exports = { Timer }