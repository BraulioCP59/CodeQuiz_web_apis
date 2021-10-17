//selectors
var highScoreEl = document.querySelector("#highScoreLink");
var timerEl = document.querySelector("#timer");
var promptSection = document.querySelector("#promptSection");
var inputSection = document.querySelector("#inputSection");
var resultSection = document.querySelector("#resultSection");
var startButtonEl= document.querySelector("#startButton");


//global variables
var timeCount = 75;
var questionCounter = 1;
var questions = {
    questionOne : {
        questionText: "<h1> This is a question #1!</h1>",
        answers: "<ul><li>1.Answer 1</li><li>2.Answer 2</li><li>3.Answer 3</li><li>4.Answer4</li></ul>",
        step: 1
    },
    questionTwo: {
        questionText: "<h1> This is a question #2!</h1>",
        answers: "<ul><li>1.Answer 1</li><li>2.Answer 2</li><li>3.Answer 3</li><li>4.Answer4</li></ul>",
        step: 2
    },
    questionThree: {
        questionText: "<h1> This is a question #3!</h1>",
        answers: "<ul><li>1.Answer 1</li><li>2.Answer 2</li><li>3.Answer 3</li><li>4.Answer4</li></ul>",
        step: 3
    },
    questionFour: {
        questionText: "<h1> This is a question #4!</h1>",
        answers: "<ul><li>1.Answer 1</li><li>2.Answer 2</li><li>3.Answer 3</li><li>4.Answer4</li></ul>",
        step: 4
    },
    questionFive: {
        questionText: "<h1> This is a question #5!</h1>",
        answers: "<ul><li>1.Answer 1</li><li>2.Answer 2</li><li>3.Answer 3</li><li>4.Answer4</li></ul>",
        step: 5
    }
}

//functions

//function for deducting seconds

//

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
    var interval = setInterval(()=>{
        count --;
        if(count == 0)
        {
            window.clearInterval(interval);
        }
        timerEl.textContent = "Time: " + count;
        
    },1000)
}


//runs quiz

function startQuiz(){
    startButtonEl.addEventListener("click", ()=>{
        startTimer(timeCount);
        displayQuestion(questionCounter);
        ++questionCounter
        //if(inputsection.getattr)
            //set event listers to li/answers
                //if wrong li with wa attr remove  10 sec
                //else move  on

    })
}

startQuiz();