function buildCalendar(){

const cal =
document.getElementById("calendar");

cal.innerHTML="";

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const months = [
"January","February","March",
"April","May","June",
"July","August","September",
"October","November","December"
];

document.getElementById(
"monthTitle"
).textContent =
`📅 ${months[month]} ${year}`;
const weekdays = [
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
];

weekdays.forEach(day=>{

const d =
document.createElement("div");

d.innerHTML =
`<strong>${day}</strong>`;

cal.appendChild(d);

});
const days =
new Date(year,month+1,0).getDate();

for(let i=1;i<=days;i++){

const d =
document.createElement("div");

d.className="day";
d.textContent=i;

if(i===now.getDate()){
d.classList.add("today");
}

const hasTask =
tasks.some(task=>{

if(!task.deadline)
return false;

const due =
new Date(task.deadline);

return (
due.getDate()===i &&
due.getMonth()===month &&
due.getFullYear()===year
);

});

if(hasTask){
d.style.border =
"2px solid orange";
}

cal.appendChild(d);

}

}
