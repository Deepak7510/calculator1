const container=document.querySelector(".container");
const result=document.querySelector(".result");
let i=0;
container.addEventListener("click",function(e){
    if(e.target.classList.contains("click")){
        result.innerText+=e.target.innerText;
        i=1;
    }else if(e.target.classList.contains("operation") && i==1 && result.innerText!=""){
        result.innerText+=e.target.innerText;
        i=0;
    }
    if(e.target.classList.contains("equal") && result.innerText!=""){
        result.innerText=eval(result.innerText).toPrecision(5);
    }
    if(e.target.classList.contains("clear")){
        result.innerText=""
    }
    if(e.target.classList.contains("clear1")){
        result.innerText=result.innerText.slice(0,-1)
    }
})