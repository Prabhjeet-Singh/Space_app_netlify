const counting=document.querySelector(".number")
let num=0;
const incre=document.getElementById("increase")
const decre=document.getElementById("decrease")
const reset=document.getElementById("reset")
const save=document.getElementById("save")
incre.addEventListener("click",function(){
  num+=1;
  counting.textContent=num;
  counting.sytle.color="green";
})