// Locate all elements on the html file
var seconds = document.getElementById("countdown").textContent;
var question = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var quizContainer = document.querySelector("#quizContainer");
var userChoice = document.querySelector("#choices");
var userResults = document.querySelector("#inGameResult");
var resultContainer = document.querySelector("#quizResult");
var userFinalScore = document.querySelector("#userFinalScore");
var userInitials = document.querySelector("#input-group-text");
var submit = document.querySelector("#submitBtn");

// Function for the quiz timer - Currently stops at 0 seconds and hides question/feedback container and shows user initial submission form and total score.
var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown) //& 
    //resultContainer.setAttribute("style", "display:block") &
    //userResults.setAttribute("style", "display:none") &
    //quizContainer.setAttribute("style", "display:none");
}, 1000);

// Quiz questions
let questions = [
    {
        question: "Which of the following is a disadvantage of using JavaScript?",
        choiceA: "Client-side JavaScript does not allow the reading or writing of files.",
        choiceB: "JavaScript can not be used for Networking applications because there is no such support available.",
        choiceC: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
        choiceD: "All of the above.",
        correct: "D",
        userAnswer: "",
        outcome: "false",
    }, {
        question: "Which of the following is true about cookie handling in JavaScript?",
        choiceA: "JavaScript can manipulate cookies using the cookie property of the Document object.",
        choiceB: "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
        choiceC: "Both of the above.",
        choiceD: "None of the above",
        correct: "C",
    }, {
        question: "Which built-in method calls a function for each element in the array",
        choiceA: "while()",
        choiceB: "loop()",
        choiceC: "forEach()",
        choiceD: "None of the above.",
        correct: "C",
    }, {
        question: "All user-defined objects and built-in objects are descendants of an object called",
        choiceA: "Object",
        choiceB: "Defined Object",
        choiceC: "DOM",
        choiceD: "Mainframe",
        correct: "A",
    }, {
        question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
        choiceA: "toSource()",
        choiceB: "valueOf()",
        choiceC: "toString()",
        choiceD: "None of the above.",
        correct: "A",
    }, {
        question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
        choiceA: "slice()",
        choiceB: "split()",
        choiceC: "substr()",
        choiceD: "substring()",
        correct: "D",
    }, {
        question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
        choiceA: "anchor()",
        choiceB: "big()",
        choiceC: "blink()",
        choiceD: "italics()",
        correct: "B",
    }, {
        question: "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
        choiceA: "concat()",
        choiceB: "pop()",
        choiceC: "push()",
        choiceD: "some()",
        correct: "A",
    }, {
        question: "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
        choiceA: "concat()",
        choiceB: "every()",
        choiceC: "filter()",
        choiceD: "some()",
        correct: "C",
    }, {
        question: "Which of the following function of Array object represents the source code of an object?",
        choiceA: "toSource()",
        choiceB: "splice()",
        choiceC: "toString()",
        choiceD: "unshift()",
        correct: "A",
    }
];

// Variables
var runningQuestion = 0;
var score = 0;
console.log("Score " + score);
// Function to run the question
function renderQuestion() {

    var q = questions[runningQuestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    choiceA.addEventListener("click", function (event) {
        console.log(event.target.id);
        runningQuestion++;
        renderQuestion();
    })

}

// Calling the Question Function
renderQuestion();