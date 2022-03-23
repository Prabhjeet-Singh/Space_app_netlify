let num=0;
const counting=document.querySelector(".number")
const incre=document.getElementById("increase")
const decre=document.getElementById("decrease")
const reset=document.getElementById("reset")
const save=document.getElementById("save");
const saveInput=document.getElementById("save-item");

incre.addEventListener("click",function(){
  num+=1;
  counting.textContent=num;
  color(num);
})

decre.addEventListener("click",function(){
  num-=1;
  counting.textContent=num;
  color(num);
})

reset.addEventListener("dblclick",function(){
  num=0;
  counting.textContent=num;
  saveInput.textContent="";
  color(num);
})

save.addEventListener("click",function(){
  saveInput.textContent+=num+" ";
})

function color(num){
if(num>0){
  counting.style.color="green";
}
else if(num<0){
    counting.style.color="red";

}
else{
    counting.style.color="black";

}}