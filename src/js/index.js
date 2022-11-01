let dateNow =  new Date();
const dateStart = Date.UTC(2022,8,7,-6,0,0)
const oneDay = 1000 * 60 * 60 * 24;
const oneHours = 1000* 60 * 60;

const diffTime = dateNow - dateStart;
const diffInDays = Math.floor(diffTime / oneDay);
const hours =  Math.floor((diffTime / oneHours)% 24)

let dateText = document.getElementsByClassName("day-text");
dateText[0].innerText = `Времени вместе: ${diffInDays} дней ${hours} часов`