// Locate all elements on the html file
var clearBtn = document.querySelector("#clearBtn");
var board = document.querySelector("#board");
var boardList = document.querySelector("#board-list");

var highScore = [
    localStorage.getItem("highScore", highScore),
]

function renderHighScore() {
  
    // Render a new li for each todo
    for (var i = 0; i < highScore.length; i++) {
      var users = highScore[i];
  
      var li = document.createElement("li");
      li.textContent = users;
  
      boardList.append(li);
    }
  }

renderHighScore();

console.log(highScore);

clearBtn.addEventListener("click", function() {
    window.localStorage.clear("highscore", highScore);
});