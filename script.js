var questionBox= [

    { question1: "Commonly used data types Do Not include:",
      options : ['Strings','boolean','alerts','numbers'],
      answer :  'alerts',

    },


 
    { question2: "The condition in an if/else statement is enclosed within___.",
      options : ['quotes','curly brackets','parentheses','square brackets'],
      answer :  'parentheses',

    },


 
    { question3: "Arrays in JavaScript can be used to store_____:",
      options : ['number and strings',' other arrays','booleans',' all of the above'],
      answer :  'all of the above',

    },


 
    { question4: "String values must be enclosed within ____ when being assigned to variables.",
      options : ['commas','curly brackets','quotes','parentheses'],
      answer :  'curly brackets',

    },


 
    { question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options : ['Javascript','Terminal-bash','for loops','Console.log'],
      answer :  'Console.log',

    }
]
var startBtn = document.querySelector( question1);

var question = document.getElementById('question1')
var options = document.getElementById('options')
var answer = document.getElementById('answer')

function result () {

}



startBtn.addEventListener("click" , startQuiz );