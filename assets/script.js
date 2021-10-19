//selectors
var bodyEl = document.querySelector("body");
var highScoreEl = document.querySelector("#highScoreLink");
var timerEl = document.querySelector("#timer");
var promptSection = document.querySelector("#promptSection");
var inputSection = document.querySelector("#inputSection");
var resultSection = document.querySelector("#resultSection");
var startButtonEl= document.querySelector("#startButton");
var answersList;


//global variables
var timeCount = 75;
var interval;
var questionCounter = 1;
var incorectMessage = "<h3 id = 'answerMessage'> Wrong Answer Selected!</h3>";
var correctMessage = "<h3 = 'answerMessage'> Correct Answer Selected!</h3>";
var questions = {
    questionOne : {
        questionText: "<h1> What does HTML stand for?</h1>",
        answers: "<ul><li id = 'correct'>Hypertext Markup Language.</li><li id = 'incorrect'>Hyperlinks and Markup Language.</li><li id = 'incorrect'>Hyper Tool Markup Language.</li><li id = 'incorrect'>None of the above.</li></ul>",
        step: 1
    },
    questionTwo: {
        questionText: "<h1> Where in HTML is the correct place to insert a JavaScript?</h1>",
        answers: "<ul><li id = 'correct'>both the head and body section are correct.</li><li id = 'incorrect'>The head section.</li><li id = 'incorrect'>The body section.</li><li id = 'incorrect'>In the title tag.</li></ul>",
        step: 2
    },
    questionThree: {
        questionText: "<h1> The external Javascript file must contain a script tag. </h1>",
        answers: "<ul><li id = 'incorrect'>True</li><li id = 'correct'>False</li></ul>",
        step: 3
    },
    questionFour: {
        questionText: "<h1>How do you declare an array?</h1>",
        answers: "<ul><li id = 'incorrect'>var myArr = {};</li><li id = 'incorrect'>var myArr = new arr();</li><li id = 'correct'>var myArr = [];</li><li id = 'incorrect'>none of the above.</li></ul>",
        step: 4
    },
    questionFive: {
        questionText: "<h1 id = 'finalQuestion'> How do you declare an object?</h1>",
        answers: "<ul><li id = 'incorrect'>var myObj{};</li><li id = 'incorrect'>var myObj = [0];</li><li id = 'incorrect'>var obj = {}};</li><li id = 'correct'>var myObj = {};</li></ul>",
        step: 5
    }
}

//functions

//funciton for displaying questions. deducts seconds if wrong answer chosen
function displayQuestion(qCount){
    //loop through questions for question where questions[step] == qCount  
        for ( var propertyL1 in questions) {

            //
            let value = questions[propertyL1];
            //
            for(var propertyL2 in value){
                let value2 = value[propertyL2];

                if(value2 == qCount)
                {
                    console.log("\n-----------------------------------------------------------------------------\n" + "Searching for question: " + qCount);
                    console.log("found IT!! " + value[propertyL2] + "\n-----------------------------------------------------------------------------");

                    //sets input section to questionList content
                    promptSection.innerHTML = value.questionText;
                    inputSection.innerHTML = value.answers;
                    inputSection.setAttribute("id","answerList");
                    startButtonEl.setAttribute("id","hiddenElement");


                    //exits loop when next question is found and displayed
                    break; 
                }
            }
        }
}




//starts timer
function startTimer(count){
    //clears any active timers
    window.clearInterval(interval);

    //creates a new interval using the given count/time value
    interval = setInterval(()=>{
        count --;
        if(count <= 0)
        {
            //kills timer when it reaches 0
            window.clearInterval(interval);
            timerEl.textContent = 0;
            gameOver();
        }else
        {
            //sets current count value to timer element on page every second.
            timerEl.textContent = count;
        }
        
        
    },1000)
    

}


//displays game over page with score submission form
function gameOver(){
    bodyEl.innerHTML = "";
    var gameOverTitleEl = document.createElement("h1");
    gameOverTitleEl.innerHTML = "GAME OVER!";
    bodyEl.appendChild(gameOverTitleEl);
}

//
function setAnswerListeners(){
    //if successfully displayed, loop through answer list and add event listeners
    if(answersList)
    {
        //loops through each li 
        answersList.forEach((item)=>{
            //adds listener to each li for each iteration
            item.addEventListener('click', (event)=>{
                //checks if li clicked is the correct answer
                if(item.getAttribute('id') == "correct")
                {
                    console.log("you clicked on correct");
                    //if final question was answered correctly
                    var currentQuestion = document.querySelector('h1');
                    if(currentQuestion.getAttribute('id') == "finalQuestion")
                    {
                        gameOver();
                    }else
                    {
                        //runs function to build and display the next questions
                        displayQuestion(questionCounter);
                        //sets counter to next question
                        ++questionCounter
                        //updates answers list with new li elements and calls this function again. 
                        answersList = document.querySelectorAll("li");
                        setAnswerListeners();
                    }
                    
                }else
                {
                    console.log("you clicked on incorrect!");

                    //displays wrong answers ui alert and calls function to remove ten sec from timer
                    resultSection.removeAttribute("id","hiddenElement");
                    resultSection.innerHTML = incorectMessage;
                    setTimeout(() => {
                        resultSection.setAttribute("id","hiddenElement");
                    }, 2000);

                    //reduces timer by ten sec as a penalty
                    var newTime = timerEl.textContent - 10;
                    startTimer(newTime);
                }
            })
        })
    }
}


//runs quiz

function startQuiz(){
    startButtonEl.addEventListener("click", (event)=>{
        console.log(event);
        startTimer(timeCount);
        displayQuestion(questionCounter);
        ++questionCounter
        answersList = document.querySelectorAll("li");
        setAnswerListeners();
    })
}

startQuiz();


