let dateNow =  new Date();
const dateStart = Date.UTC(2022,8,7,-6,0,0)
const oneDay = 1000 * 60 * 60 * 24;
const oneHours = 1000* 60 * 60;

const diffTime = dateNow - dateStart;
const diffInDays = Math.floor(diffTime / oneDay);
const hours =  Math.floor((diffTime / oneHours)% 24)

let dateText = document.getElementsByClassName("day-text");
dateText[0].innerText = `Времени вместе: ${diffInDays} день ${hours} час`;


const firstKiss = Date.UTC(2022,9-1,14,-6,0,0)
const firstSex = Date.UTC(2022,9-1,17,16,0,0)
const relation = Date.UTC(2022,10-1,16,6,0,0)
const walk = Date.UTC(2022,9-1,7,12,0,0)
const kissAfterDay =  Math.floor((dateNow - firstKiss) / oneDay);
const sexAfterDay =  Math.floor((dateNow - firstSex) / oneDay);
const relationAfterDay =  Math.floor((dateNow - relation) / oneDay);
const walkAfterDay =  Math.floor((dateNow - walk) / oneDay);

const kissAfterHours =  Math.floor(((dateNow - firstKiss) / oneHours)%24);
const sexAfterHours =  Math.floor(((dateNow - firstSex) / oneHours)%24);
const relationAfterHours =  Math.floor(((dateNow - relation) / oneHours)%24);
const walkAfterHours =  Math.floor(((dateNow - walk) / oneHours)%24);

document.getElementsByClassName("kiss-after")[0].innerText = `Прошло ${kissAfterDay} день и ${kissAfterHours} час`;
document.getElementsByClassName("sex-after")[0].innerText = `Прошло ${sexAfterDay} день и ${sexAfterHours} час`;
document.getElementsByClassName("relation-after")[0].innerText = `Прошло ${relationAfterDay} день и ${relationAfterHours} час`;
document.getElementsByClassName("walk-after")[0].innerText = `Прошло ${walkAfterDay} день и ${walkAfterHours} час`;