function unlockAchievement(name){

if(
achievements.includes(name)
) return;

achievements.push(name);

localStorage.setItem(
"achievements",
JSON.stringify(achievements)
);

renderAchievements();

confetti();

alert(
"🏆 Achievement Unlocked: "
+ name
);

}
