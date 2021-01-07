// Locate all elements on the html file
var seconds = document.getElementById("countdown").textContent;
var question = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var quizContainer = document.querySelector("#quizContainer");
var userChoice = document.querySelector("#choices");
var userFeedbackContainer = document.querySelector("#feedbackContainer");
var userFeedback = document.querySelector("#userFeedback");
var resultContainer = document.querySelector("#quizResult");
var userScoreDisplay = document.querySelector("#userFinalScore").textContent;
var userInitials = document.querySelector("#userInitial");
var submit = document.querySelector("#submitBtn");

// Function for the quiz timer - Currently stops at 0 seconds and hides question/feedback container and shows user initial submission form and total score.
var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown) &
        quizContainer.setAttribute("style", "display:none") &
        userFeedbackContainer.setAttribute("style", "display:none") &
        resultContainer.setAttribute("style", "display:block");

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
var correctFeedback = "Last selection was CORRECT!"
var incorrectFeedback = "Last selection was INCORRECT!"


// Function to run the question
function renderQuestion() {
    var q = questions[runningQuestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    correct = q.correct;
};

// Event On Click of option A
choiceA.addEventListener("click", function (event) {
    var userAnswer = event.target.id;

    if (userAnswer === correct) {
        score += 10;
        document.getElementById("userFinalScore").textContent = score;
        document.getElementById("userFeedback").textContent = correctFeedback;
    }
    else {
        seconds -= 5;
        document.getElementById("userFeedback").textContent = incorrectFeedback;
    }

    runningQuestion++;
    console.log(runningQuestion);
    console.log(score);

    if (runningQuestion < 10) {
        renderQuestion();
    }
    else {
        endGame();
    }

});

// Event On Click of option B
choiceB.addEventListener("click", function (event) {
    var userAnswer = event.target.id;

    if (userAnswer === correct) {
        score += 10;
        document.getElementById("userFinalScore").textContent = score;
        document.getElementById("userFeedback").textContent = correctFeedback;
    }
    else {
        seconds -= 5;
        document.getElementById("userFeedback").textContent = incorrectFeedback;
    }

    runningQuestion++;
    console.log(runningQuestion);
    console.log(score);

    if (runningQuestion < 10) {
        renderQuestion();
    }
    else {
        endGame();
    }
});

// Event On Click of option C
choiceC.addEventListener("click", function (event) {
    var userAnswer = event.target.id;

    if (userAnswer === correct) {
        score += 10;
        document.getElementById("userFinalScore").textContent = score;
        document.getElementById("userFeedback").textContent = correctFeedback;
    }
    else {
        seconds -= 5;
        document.getElementById("userFeedback").textContent = incorrectFeedback;
    }

    runningQuestion++;
    console.log(runningQuestion);
    console.log(score);

    if (runningQuestion < 10) {
        renderQuestion();
    }
    else {
        endGame();
    }
});

// Event On Click of option D
choiceD.addEventListener("click", function (event) {
    var userAnswer = event.target.id;

    if (userAnswer === correct) {
        score += 10;
        document.getElementById("userFinalScore").textContent = score;
        document.getElementById("userFeedback").textContent = correctFeedback;
    }
    else {
        seconds -= 5;
        document.getElementById("userFeedback").textContent = incorrectFeedback;
    }

    runningQuestion++;
    console.log(runningQuestion);
    console.log(score);

    if (runningQuestion < 10) {
        renderQuestion();
    }
    else {
        endGame();
    }
});

// Calling the Question Function
renderQuestion();

function endGame() {
    clearInterval(countdown);
    document.getElementById("countdown").textContent = 0;
    quizContainer.setAttribute("style", "display:none");
    userFeedbackContainer.setAttribute("style", "display:none");
    resultContainer.setAttribute("style", "display:block");
};

// Empty variable to store user input of name and score
const highScoreBoard = JSON.parse(localStorage.getItem("highScoreBoard"));

// Storing player's name and score in the local storage
submit.addEventListener("click", function (event) {
    event.preventDefault();

    var newScore = userInitials.value.trim();

    highScoreBoard.push(newScore + " " + score + " total points!");

    localStorage.setItem("highScoreBoard", JSON.stringify(highScoreBoard));

    window.location.href = "../pages/highscore.html"
});