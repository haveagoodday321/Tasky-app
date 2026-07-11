function unlockPremium(){
  let trialUsed =
localStorage.getItem("trialUsed")==="true";
function unlockPremium(){

if(trialUsed){
alert("Free trial already used");
return;
}

const trialEnd =
Date.now() + (30*24*60*60*1000);

localStorage.setItem(
"premiumUntil",
trialEnd
);

localStorage.setItem(
"trialUsed",
true
);

alert(
"🎉 Premium unlocked for 30 days!"
);

}
