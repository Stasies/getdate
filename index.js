const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const weekdays = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
let month;
let day;
let year;
let week;
let weekday;
function getDayInfoTwo(date) {
  let newDate = date.valueAsDate;
  day = newDate.getDate();

  if (day / 7 <= 1) {
    week = 1;
  } else if (day / 7 > 1 && day / 7 <= 2) {
    week = 2;
  } else if (day / 7 > 2 && day / 7 <= 3) {
    week = 3;
  } else if (day / 7 > 3 && day / 7 <= 4) {
    week = 4;
  } else {
    week = 5;
  }
  weekday =
    weekdays[newDate.getDay()].charAt(0).toUpperCase() +
    weekdays[newDate.getDay()].slice(1);

  month =
    months[newDate.getMonth()].charAt(0).toUpperCase() +
    months[newDate.getMonth()].slice(1);

  year = newDate.getFullYear();

  let dayInfo =
    weekday + `, ` + week + ` неделя ` + month + ` ` + year + ` года`;

  document.getElementById("thisDate").innerHTML = dayInfo;
}

function getDayInfo(date) {
  let data = date.value.toString().split(".");
  day = data[0];
  data = [data[1], data[0], data[2]];
  let newDate = new Date(data);
  if (data[1] < 10) {
    month = months[data[0].slice(1) - 1];
  } else {
    month = months[data[0] - 1];
  }
  weekday =
    weekdays[newDate.getDay()].charAt(0).toUpperCase() +
    weekdays[newDate.getDay()].slice(1);
  if (day / 7 <= 1) {
    week = 1;
  } else if (day / 7 > 1 && day / 7 <= 2) {
    week = 2;
  } else if (day / 7 > 2 && day / 7 <= 3) {
    week = 3;
  } else if (day / 7 > 3 && day / 7 <= 4) {
    week = 4;
  } else {
    week = 5;
  }
  year = data[2];
  month = month.charAt(0).toUpperCase() + month.slice(1);
  let dayInform =
    weekday + `, ` + week + ` неделя ` + month + ` ` + year + ` года`;
  document.getElementById("thisDate").innerHTML = dayInform;
}
// console.log(getDayInfoNew("02.03.2021"));
