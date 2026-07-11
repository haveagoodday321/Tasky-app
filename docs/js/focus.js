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

