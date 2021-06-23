var questionBox= [

    { question: "Commonly used data types Do Not include:",
      options : ['Strings','Boolean','Alerts','Numbers'],
      result :  'Alerts',

    },


 
    { question: "The condition in an if/else statement is enclosed within___.",
      options : ['Quotes','Curly brackets','Parentheses','Square brackets'],
      result :  'Parentheses',

    },


 
    { question: "Arrays in JavaScript can be used to store_____:",
      options : ['Number and strings',' Other arrays','Booleans',' All of the above'],
      result :  'All of the above',

    },


 
    { question: "String values must be enclosed within ____ when being assigned to variables.",
      options : ['Commas','Curly brackets','Quotes','Parentheses'],
      result :  'Curly brackets',

    },


 
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options : ['Javascript','Terminal-bash','For loops','Console.log'],
      result :  'Console.log',

    }
]


var startBtn = document.querySelector("#start-quiz");
var firstSlide = document.querySelector("#first-slide");
var quizArea = document.querySelector("#quiz-area");
// var buttonReference = document.querySelector("#quiz-area > button");
 

var question = document.querySelector("#question");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");

var answersCorrect = document.querySelector("#answersCorrect");
var answersWrong = document.querySelector("#answersWrong");

let timeLeft;
var quizTimer;
var timer = document.querySelector("#timer");

 let questionCounter;

function startQuiz() {
     
firstSlide.classList.add("hide")
quizArea.classList.remove("hide")


  questionCounter = 0;
  timeLeft= 60; //seconds

  quizTimer = setInterval(function(){

    if(timeLeft <=0) {
      clearInterval(quizTimer);
      timer.innerHTML = "finished";
      endQuiz();

    } else {
      timer.innerHTML = timeLeft + " seconds remaining.";
    }

    timeLeft = timeLeft - 1;

  },  1000);

  resetScore();
  firstSlide.style.display = 'none';
  quizArea.style.display = 'block';

}

   function showQuestion() {

      question.innerHTML = questionBox[questionCounter].question;
      choiceA.innerHTML = questionBox[questionCounter].options[0];
      choiceB.innerHTML = questionBox[questionCounter].options[1];
      choiceC.innerHTML = questionBox[questionCounter].options[2];
      choiceD.innerHTML = questionBox[questionCounter].options[3];


}

function answerQuestion(choice){

  // if correct answer

  if(questionBox[questionCounter].result == choice) {
    answersCorrect.innerHTML = parseInt(answersCorrect.innerHTML) + 1; 
  
  } else {
    // if wrong answer

    timeLeft = timeLeft - 10;
    answersWrong.innerHTML = parseInt(answersWrong.innerHTML) + 1;

  }

  questionCounter = questionCounter + 1;

  if (questionCounter > questionBox - 1) {

     endQuiz();

  } else{ 
    
    showQuestion( );
  
  } 

}


 function endQuiz() {

    clearInterval(quizTimer);
    timer.innerHTML = 'Time';

    const totalAnswered = parseInt(answersCorrect.innerHTML) + parseInt(answersWrong.innerHTML);
    const totalQuestions = questionBox.length;
    const totalDifference = totalQuestions - totalAnswered;
    answersWrong.innerHTML = parseInt(answersWrong.innerHTML) + totalDifference;


  
   firstSlide.style.display = 'block' ;
   quizArea.style.display = 'none' ;


}    
 

  function resetScore() {

    answersCorrect.innerHTML = 0;
    answersWrong.innerHTML = 0;

  }

    
  
  startBtn.addEventListener("click" , startQuiz);
  
      
  
  
  
  
  
  
  
  
    
  
  
  
     
    
 

    

 

