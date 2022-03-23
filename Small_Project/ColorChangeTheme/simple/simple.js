const colors=["red","blue","green","pink","aqua"];
let color
const colorEl=document.querySelector(".color-el");
const btn=document.getElementById("Btn")
const Btncolor=document.getElementsByClassName(".Btn");
btn.addEventListener("click",function(){
    color=colors[randonNumber()];
    document.body.style.background=color;
    colorEl.textContent=color;
    Btncolor.style.background=color;

})


function randonNumber(){
    return Math.floor(Math.random()*colors.length);
}
