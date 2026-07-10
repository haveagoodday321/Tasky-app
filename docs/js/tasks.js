function addTask() {
  const input = document.getElementById("taskInput");
  const section = document.getElementById("sectionSelect").value;
  const priority = document.getElementById("priority").value;
  const category =
document.getElementById("category").value;
  if(!input.value){
   alert("Please enter a task");
   return;
  }
const deadline = document.getElementById("deadline").value;
const repeat = document.getElementById("repeat").value;
const time = document.getElementById("time").value;

  tasks.push({
text: input.value.trim(),
section: section,
done:false,
priority,
category,
  deadline: deadline,
  repeat: repeat,
  time: time,
  xp: 10,

  createdAt: new Date().toISOString()
});

alert("✅ Task added!");
  input.value="";
document.getElementById("deadline").value="";
document.getElementById("time").value="";
document.getElementById("priority").selectedIndex=0;
  renderTasks();
  renderCompletedTasks();
  saveTasks();
  updateStats();
  updateFocus();
  updateDailyProgress();
  updatePlanner();
  updateFocusScore();
  updateGoal();
}

functiontoggleTask(i) {

if(weekTasks===1){
unlockAchievement(
"First Task Completed"
);
}

if(weekTasks===10){
unlockAchievement(
"10 Tasks Completed"
);
}

if(weekTasks===50){
unlockAchievement(
"50 Tasks Completed"
);
}
if(streak>=7)
unlockAchievement("7 Day Streak");

if(streak>=30)
unlockAchievement("30 Day Streak");

if(weekTasks>=100)
unlockAchievement("100 Tasks Completed");

if(level>=10)
unlockAchievement("Level 10");

  // Stop if task already completed
  if(tasks[i].done) return;

  // Mark task as done
tasks[i].done = true;
  
tasks[i].completedAt =
new Date().toISOString();
  
confetti();

// Completion message
alert(`🎉 Task completed: ${tasks[i].text}`);
const audio =
new Audio("success.mp3");

audio.play();

  // Give XP once
  xp += 10;
  weekTasks++;
  updateStats();
  if(weekTasks===10){
alert(
"🏅 Achievement Unlocked: 10 Tasks Completed!"
);
}

if(streak===7)
unlockAchievement("7 Day Streak");

if(streak===30)
unlockAchievement("30 Day Streak");

if(level===5)
unlockAchievement("Level 5");

if(level===10)
unlockAchievement("Level 10");

if(tasks.length===50)
unlockAchievement("Created 50 Tasks");

if(streak===30){
alert(
"🔥 Achievement Unlocked: 30 Day Streak!"
);
}

  // Level system
  if(xp >= level * 100){
    xp -= level * 100;
    level++;
  }
  // Save data
  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);
  localStorage.setItem("weekTasks", weekTasks);

  // Update screen
  document.getElementById("xp").textContent = xp;
  document.getElementById("level").textContent = level;
  document.getElementById("weekTasks").textContent = weekTasks;

  saveTasks();
  renderTasks();
  renderCompletedTasks();
  updateStats();
  updateStreak();
  updateFocus();
  updateDailyProgress();
  updatePlanner();
  updateTaskHistory();
 updateFocusScore();
  updateGoal();
}

function updateFocus(){

const focus =
document.getElementById("focusList");

focus.innerHTML = "";

const today = new Date();

const focusTasks = tasks.filter(t=>{

if(t.done) return false;

if(t.priority==="High") return true;

if(t.deadline){

const due = new Date(t.deadline);

const diff = Math.ceil(
(due - today)/(1000*60*60*24)
);

return diff <= 1;
}

return false;

});

focusTasks.sort((a,b)=>{

});

focusTasks.slice(0,5).forEach(task=>{

const li =
document.createElement("li");

li.textContent =
`🎯 ${task.text}`;

focus.appendChild(li);

});

const scoreA =
(a.priority==="High"?3:
a.priority==="Medium"?2:1)
+
(a.deadline?2:0);

const scoreB =
(b.priority==="High"?3:
b.priority==="Medium"?2:1)
+
(b.deadline?2:0);

return scoreB-scoreA;

});

}

function processRepeatingTasks(){

const today =
new Date().toDateString();

tasks.forEach(task=>{

if(
task.done &&
task.repeat !== "none"
){

if(task.lastRepeat===today)
return;

task.done = false;

task.createdAt =
new Date().toISOString();

task.lastRepeat = today;

}

function editTask(i){

  const newText = prompt(
    "Edit task:",
    tasks[i].text
  );

  if(newText){

    tasks[i].text = newText;

    saveTasks();
    renderTasks();

  }
}

function deleteTask(i){

if(confirm("Delete task?")){

tasks.splice(i,1);

saveTasks();

renderTasks();

renderCompletedTasks();

updateStats();

updateFocus();

updatePlanner();

updateTaskHistory();

updateFocusScore();

updateGoal();
}

}

