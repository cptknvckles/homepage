let addEl = document.getElementById('addBack')
let nightEl = document.getElementById('darkMode')
var clockEl = document.getElementById('clock')
var dateAndTime = document.getElementById('time')
var currentTime = new Date()
dateAndTime.innerHTML = 'Today is ' + currentTime.toDateString()
//current time
setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	// let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	// sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + " " + am_pm;

	clockEl.innerHTML = currentTime;
}
showTime();




// nightmode
nightEl.addEventListener("click", function(event){
	document.body.style.backgroundImage = "url(./images/night-time.jpg)"
	if(this.click){
		event.target.style.color = 'gold'
		
	}
})
//daymode
