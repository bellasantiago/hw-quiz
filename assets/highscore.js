// Locate all elements on the html file
var clearBtn = document.querySelector("#clearBtn");
var board = document.querySelector("#board");
var boardList = document.querySelector("#board-list");

// Retrieve scores stored in the local storage and add them to a new variable
var highScore = [
  localStorage.getItem("highScore", highScore),
]

// Function to render stored scored as a new list item
function renderHighScore() {

  // Render a new li for each stored score
  for (var i = 0; i < highScore.length; i++) {
    var users = highScore[i];

    var li = document.createElement("li");
    li.textContent = users;
    boardList.append(li);
  }
}

renderHighScore();

// Function to reset highscores
clearBtn.addEventListener("click", function () {
  window.localStorage.clear("highscore", highScore);
});