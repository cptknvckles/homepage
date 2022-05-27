let homeTabs = []

let saveEl = document.getElementById('save')
let inputEl = document.getElementById('bkmrk')
let nameEl = document.getElementById('name')
let ulEl = document.getElementById('tabsList')
var clockEl = document.getElementById('clock')
const leads = JSON.parse(localStorage.getItem("homeTabs"))
var dateAndTime = document.getElementById('time')
var currentTime = new Date()
dateAndTime.innerHTML = 'Today is ' + currentTime.toDateString()

if(leads){
    homeTabs = leads
    renderList()
}

//Customizing your own links TODO figure out how to show the link with 
//just the title not the whole ass
saveEl.addEventListener("click", function(){
    homeTabs.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("homeTabs", JSON.stringify(homeTabs))
    renderList()
})



function renderList(){
    let listItems = ''
    for(let i = 0; i < homeTabs.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${homeTabs[i]}'>
                    ${homeTabs[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

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
