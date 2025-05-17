let gameseq=[];
let userseq=[];

let btns=["pink" ,"yellow","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
//step1
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    levelup();
    } 
});
//step3 Gameflash
function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
//step5 userflash
function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},250);
}
//step2
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //step4 generating random colors
    let randidx=Math.floor(Math.random()*4);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    //console.log(gameseq);
    //random btn choose
    gameflash(randbtn);
}
//step6
function checkans(idx){
//console.log("curr level :",level);

if(userseq[idx]===gameseq[idx]){
    if(userseq.length== gameseq.length){
     setTimeout(levelup,1000);
    }
}else{
    h2.innerHTML=`game over! Your score was <b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";

    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}

//step4 Button pressed
function btnPress(){
   // console.log(this)
    let btn=this;
    userflash(btn);
    //
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userColor);
    checkans(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
//step7
function reset(){
    started=[];
    gameseq=[];
    userseq=[];
    level=0;
}