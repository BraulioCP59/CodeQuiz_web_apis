//selectors
var highScoreEl = document.querySelector("#highScoreLink");
var timerEl = document.querySelector("#timer");
var promptSection = document.querySelector("#promptSection");
var inputSection = document.querySelector("#inputSection");
var resultSection = document.querySelector("#resultSection");
var startButtonEl= document.querySelector("#startButton");


//global variables
var timeCount = 3;

//functions



//starts timer
function startTimer(count){
    var interval = setInterval(()=>{
        if(count == 0)
        {
            window.clearInterval(interval);
        }
        timerEl.textContent = "Time: " + count;
        count --;
    },1000)
}


//runs quiz

function startQuiz(){
    startButtonEl.addEventListener("click", ()=>{
        startTimer(timeCount);
        
    })
}

startQuiz();