var questionBox= [

    { question: "Commonly used data types Do Not include:",
      options : ['Strings','boolean','alerts','numbers'],
      result :  'alerts',

    },


 
    { question: "The condition in an if/else statement is enclosed within___.",
      options : ['quotes','curly brackets','parentheses','square brackets'],
      result :  'parentheses',

    },


 
    { question: "Arrays in JavaScript can be used to store_____:",
      options : ['number and strings',' other arrays','booleans',' all of the above'],
      result :  'all of the above',

    },


 
    { question: "String values must be enclosed within ____ when being assigned to variables.",
      options : ['commas','curly brackets','quotes','parentheses'],
      result :  'curly brackets',

    },


 
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options : ['Javascript','Terminal-bash','for loops','Console.log'],
      result :  'Console.log',

    }
]
var startBtn = document.querySelector("#start-quiz");

var firstSlide = document.querySelector("#first-slide")
var quizArea = document.querySelector("#quiz-area")



var answerChoice = ("");

function startQuiz () {
     
    firstSlide.classList.add("hide")
    quizArea.classList.remove("hide")

    // questionBox[0].question[1].

    
    
    let question1 = document.getElementById('questionBox[0]');
    let selections = document.getElementById('options');
    let userChoice = document.getElementById('result');


     


}

startBtn.addEventListener("click" , startQuiz);

