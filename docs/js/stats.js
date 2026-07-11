function updateStats(){
  const total = tasks.length;

document.getElementById("taskCount")
.textContent = total;

  const done = tasks.filter(t => t.done).length;

  let percent = 0;

  if(total > 0){
    percent = Math.round((done / total) * 100);
  }

  document.getElementById("productivity").textContent = percent + "%";
  document.getElementById("progressBar").style.width = percent + "%";
}
if(isPremiumActive()){

const daysLeft=Math.ceil(
(premiumUntil-Date.now())/
(1000*60*60*24)
);

document.querySelector(
".premium-card .soft"
).textContent=
`Premium active (${daysLeft} days left)`;

}
if(!localStorage.getItem("welcomed")){

alert(
"👋 Welcome to Tasky! Create tasks, build streaks and stay productive."
);

localStorage.setItem(
"welcomed",
true
);

}

function updateDailyProgress(){

const today =
new Date().toDateString();

const todayTasks =
tasks.filter(task=>
new Date(
task.createdAt
).toDateString()===today
);

const completed =
todayTasks.filter(
t=>t.done
).length;

let percent = 0;

if(todayTasks.length>0){

percent =
Math.round(
(completed /
todayTasks.length)
*100
);

}

document.getElementById(
"todayPercent"
).textContent =
percent + "%";

}
let achievements =
JSON.parse(
localStorage.getItem("achievements")
|| "[]"
);

}
