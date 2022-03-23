const colors=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E"];
let color="#"
const colorEl=document.querySelector(".color-el");
const btn=document.getElementById("button-el")
btn.addEventListener("click",function(){
    for(let i=0;i<6;i++){
    color+=colors[randonNumber()];
    }
    document.body.style.background=color;
    colorEl.textContent=color;
    color="#";
})


function randonNumber(){
    return Math.floor(Math.random()*colors.length);
}
