//your JS code here. If required.
const button = document.getElementById("incrementBtn");
const counter = document.getElementById("counter");

let count = 0;
button.addEventListener("click",()=>{
	alert(`current value : ${count}`);
	count++;
	counter.textContent = count;
})



