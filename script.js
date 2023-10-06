const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline =  document.querySelector('.deadline')
const items= document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempMinute = tempDate.getMinutes();
let tempHour = tempDate.getHours()



let futureDate = new Date(tempYear, tempMonth, tempDay , tempHour, tempMinute +2, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `Giveaway Ends on ${weekday}, ${date} ${month}  ${year} ${hour}:${minute}pm `;

const futureTime = futureDate.getTime();


function getRemainingTime() {
const today = new Date().getTime();


const t = futureTime - today;

// values in ms
const oneDay = 24 * 60 * 60 *1000;
const oneHour = 60 * 60 * 1000;
const oneMin = 60 * 1000;

let days = t / oneDay
days = Math.floor(days)


let hours =Math.floor( (t % oneDay) / oneHour);
let mins = Math.floor((t % oneHour) / oneMin);
let seconds = Math.floor((t % oneMin) / 1000);

const values = [days,hours,mins,seconds];

function format(item) {
    if(item < 10){
        return item = `0${item}`;
    }
    return item
}

items.forEach((item,index) => {
    item.innerHTML = format(values[index]);
});
if(t < 0){
    clearInterval(countdown);
    // const expired = document.querySelector('.expired')
    // expired.textContent = 'Sorry this giveaway has expired'
deadline.innerHTML =`<h4 class="expired">sorry, this giveaway has expired!</h4>`
    deadline.style.color = 'red';
}





}
// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime()



