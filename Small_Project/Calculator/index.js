let screen=document.getElementById("screen");
let button=document.querySelectorAll("button");
let screenvalue="";

for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is',buttonText);
        if(buttonText=="x"){
            buttonText="*";
            screenvalue+=buttonText;
            screen.value +=buttonText;
        }
        else if (buttonText =='C'){
          screenvalue="";
          screen.value=screenvalue;
        }
        else if (buttonText =='='){
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=buttonText;
            screen.value+=buttonText;    
        }
    })
}