var moment = require("moment");

function getWeekDay() {
  return moment().day();
}

function getCurrentMonth() {
  return moment().month();
}

function getCurrentYear() {
  return moment().year();
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
