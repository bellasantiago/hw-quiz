// Locate all elements on the html file
var clearBtn = document.querySelector("#clearBtn");
var board = document.querySelector("#board");
var boardList = document.querySelector("#board-list");

// Retrieve scores stored in the local storage and add them to a new variable
var highScoreBoard = [
  localStorage.getItem("highScoreBoard", highScoreBoard),
]

// Convert stored data from string to an array
const scoreData = JSON.parse(highScoreBoard);

function renderHighScore() {

  // Render a new li for each stored score
  for (i = 0; i < scoreData.length; i++) {
    var users = scoreData[i];
    var li = document.createElement("li");
    li.textContent = users;
    boardList.append(li);
  }
}

renderHighScore();

// Function to reset highscores
clearBtn.addEventListener("click", function () {
  $("#board-list").empty();
  window.localStorage.clear("highscoreBoard", highScoreBoard);
});