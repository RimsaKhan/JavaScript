const timer=document.querySelector('.timer');
const title=document.querySelector('.title');
const startBtn=document.querySelector('.startBtn');
const pauseBtn=document.querySelector('.pauseBtn');
const resumeBtn=document.querySelector('.resumeBtn');
const resetBtn=document.querySelector('.resetBtn');
const pomoCountDisplay=document.querySelector('.pomoCountDisplay');
//Making variables
const WORK_TIME=25*60;
const BREAK_TIME=5*60;
let timerID=null;
let oneRoundCompleted=false;//one round = work time + break time
let totalCount;
let paused=false;
//function to update title
const updateTitle=(msg)=>{
title.textContent=msg;
}

//function to save pomodoro counts
const saveLocalCounts=()=>{
let counts=JSON.parse(localStorage.getItem("pomoCounts"));
counts!==null ? counts++ : counts=1; 
localStorage.setItem("pomoCounts",JSON.stringify(counts));
}

//function to countdown
const countDown=(time)=>{
    return()=>{
    const mins=Math.floor(time/60).toString().padStart(2,'0');
    const secs=Math.floor(time%60).toString().padStart(2,'0');
    timer.textContent=`${mins}:${secs}`;
    time--;
    if(time<0){
        stopTimer();
         if(!oneRoundCompleted){
          timerID=startTimer(BREAK_TIME);
          oneRoundCompleted=true;
          updateTitle("It's Break Time!");
        }
        else{
              updateTitle("Completed 1 Round of Pomodoro Technique!");
              setTimeout((()=> updateTitle("start Timer again!"),2000));
              totalCount++;
              saveLocalCounts();
              showPomoCounts();
            }
    }
    }
}
//function to start timer
const startTimer=(startTime)=>{
    if(timerID!==null){
        stopTimer();
    }
return setInterval(countDown(startTime),1000);
}
//event listener to start timer
startBtn.addEventListener("click",()=>{
    timerID=startTimer(WORK_TIME);
     updateTitle("It's Work Time!");
});
//function to stop timer
const stopTimer=()=>{
clearInterval(timerID);
timerID=null;
}
//function to get time in seconds
const getTimerInSeconds=(timeString)=>{
 const[minutes,seconds]=timeString.split(":");
 return parseInt(minutes)*60+parseInt(seconds);
}

//Function to show completed pomodoros to screen from local storage

const showPomoCounts=()=>{
    const counts=JSON.parse(localStorage.getItem("pomoCounts"));
    if(counts>0){
      pomoCountDisplay.style.display="flex";
    }
    pomoCountDisplay.firstElementChild.textContent=counts;
}
showPomoCounts();

//event listener to reset timer
resetBtn.addEventListener("click",()=>{
stopTimer();
timer.textContent="25:00";
});

//event listener to pause timer
pauseBtn.addEventListener("click",()=>{
stopTimer();
paused=true;
updateTitle("Timer Paused");
});

//event listener to resume timer
resumeBtn.addEventListener("click",()=>{
    if(paused){
       const currentTime=getTimerInSeconds(timer.textContent);
       timerID=startTimer(currentTime);
       paused=false;
       (!oneRoundCompleted)?updateTitle("It's Work time"): updateTitle("It's BreakTime");
    }
});
