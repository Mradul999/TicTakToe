const circleCross = document.querySelector("[circle-cross]");
const currentPlayeOrWinner = document.querySelector(
  "[current-player-or-winner]"
);

const boxes = document.querySelectorAll(".box");

// on each box event listner;
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.innerText === "") {
      if (circleCross.innerText === "O") {
        fillCircle(box);
      } else {
        fillCross(box);
      }
      winnerPlayer();
    //   gameTied();
    }
  });
});
// let count = 0;

//function to fill circle in the box
function fillCircle(boxValue) {
  boxValue.innerText = "O";
  circleCross.innerText = "X";
}

//function to fill cross in the box
function fillCross(boxValue) {
  boxValue.innerText = "X";
  circleCross.innerText = "O";
}

const newGameButton = document.querySelector(".new-game");

// function which reset the game
function startNewGame() {
  circleCross.innerText = "X";
  currentPlayeOrWinner.innerText = "Current Player-";

  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  boxes.forEach((box) => {
    box.style.pointerEvents = "all";
  });
}

//to start a new game button event listener
newGameButton.addEventListener("click", function () {
  startNewGame();
  newGameButton.classList.remove("active");
});

//function for winner
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

let win;

function winnerPlayer() {
  const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winPatterns.forEach((pattern) => {
    if (
      boxes[pattern[0]].innerText &&
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[0]].innerText === boxes[pattern[2]].innerText
    ) {
      boxes[pattern[0]].style.backgroundColor = "green";
      boxes[pattern[1]].style.backgroundColor = "green";
      boxes[pattern[2]].style.backgroundColor = "green";

      currentPlayeOrWinner.innerText = "Winner-";
      circleCross.innerText = boxes[pattern[0]].innerText;

      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
      newGameButton.classList.add("active");



      return;
    }
    let count=0;
    boxes.forEach((counter) => {
        if (counter.innerText !== "") {
          count++;
        }
    });

    if(count===9){
        currentPlayeOrWinner.innerText = "Game Tied!!";
      circleCross.innerText = "";
      newGameButton.classList.add("active");

    }


  });
}


