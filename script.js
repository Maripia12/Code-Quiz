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
var buttonReference = document.querySelector("#quiz-area > button")
let questionCounter = 0


var answerChoice = ("");

function startQuiz () {
     
    firstSlide.classList.add("hide")
    quizArea.classList.remove("hide")

    // questionBox[0].question[1].

    console.log ("quiz area", quizArea.children)
   
    let h2element = document.createElement("h2");
    h2element.textContent=questionBox[questionCounter].question
    quizArea.append(h2element);
    questionBox[questionCounter].options.forEach(function(option){

      let button = document.createElement("button");
      button.textContent=option
      button.setAttribute("onclick","answerQuestion(event)")
      quizArea.append(button);




    }) 








     questionCounter++


}

  function answerQuestion (event) {
    console.log ("answer question" , questionBox[questionCounter-1].result,event.currentTarget.value)
  }
startBtn.addEventListener("click" , startQuiz);
// buttonReference.addEventListener("click" , answerQuestion);

