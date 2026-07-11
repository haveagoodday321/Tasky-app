function toggleTheme(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem(
"theme",
"light"
);

}else{

localStorage.setItem(
"theme",
"dark"
);

}

}
