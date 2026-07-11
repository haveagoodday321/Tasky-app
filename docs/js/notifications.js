function enableNotifications(){

if(
"Notification" in window
){

Notification.requestPermission();

}

}

function checkReminders(){

tasks.forEach(task=>{

if(task.deadline){

const due =
new Date(task.deadline);

if(
due < new Date()
&& !task.done
){

new Notification(
"🚨 Overdue Task",
{
body: task.text
}
);

}

}

if(
task.time &&
!task.done
){

const now =
new Date();

const current =
now.getHours()
.toString()
.padStart(2,"0")
+
":" +
now.getMinutes()
.toString()
.padStart(2,"0");

if(current===task.time){

new Notification(
"⏰ Task Reminder",
{
body: task.text
}
);

}

}

});

}

