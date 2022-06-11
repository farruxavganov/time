const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const title = document.getElementsByClassName("content__sub-title");
const deadline = document.querySelector(".time-box");
const times = document.querySelectorAll(".time-box__time");

let today = new Date();

let futureTime = new Date(today.getFullYear(),today.getMonth(),today.getDate() + 10,11,30,0);

let hours = futureTime.getHours();
let minutes = futureTime.getMinutes()

let year = futureTime.getFullYear()
let month = futureTime.getMonth();
month = months[month];

let weekDay = futureTime.getDay();
weekDay = weekdays[weekDay];
let date = futureTime.getDate(); 

title[0].textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hours}:${minutes}am`;

let futureLeter = futureTime.getTime();

function getDowTime() {
	let today = new Date();

	let t = futureLeter - today;

	let oneDay = 24 * 60 * 60 * 1000;
	let oneHour = 60 * 60 * 1000;
	let oneMinute = 60 * 1000;

	let days = t / oneDay;
	days = Math.floor(days);

	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);

	function format(date) {
	if(date < 10){
		return (`0${date}`);
	}else {
		return date;
	}
	}

	let dateArry = [days,hours, minutes, seconds];

	times.forEach((item, index)=>{
		item.innerHTML = format(dateArry[index]);
	})

	if(t < 0) {
		clearInterval(countDown);
    	deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
	}

}



let countDown = setInterval(getDowTime, 1000);
getDowTime();
