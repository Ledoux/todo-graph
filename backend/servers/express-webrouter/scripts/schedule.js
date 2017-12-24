// from https://github.com/johnhenry/example-heroku-clock-js/blob/master/Procfile
const CronJob = require('cron').CronJob

//OnInterval
function dayInterval () {
  console.log("Another day is gone by. What did you do in them?")
}
setInterval(dayInterval, 60000*60*24)

//For specific times, use a chron job
function everyWeekDayTick () {
  console.log("Another weekday is gone forever. Hopefully, you made the most of it...")
}
new CronJob({
  cronTime: '00 30 11 * * 1-5',
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  onTick: everyWeekDayTick,
  start: true,
  timeZone: "America/Los_Angeles"
})
