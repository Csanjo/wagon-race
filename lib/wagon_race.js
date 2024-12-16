// TODO: write your code here
const playerOne = document.querySelector("#player1-race");
let playerOnePos = document.querySelector("#player1-race .active");

const playerTwo = document.querySelector("#player2-race");
let playerTwoPos = document.querySelector("#player2-race .active");

const playerMove = (player) => {
  if (player.nextElementSibling !== null) {
    player.classList.remove("active");
    const newPosOne = player.nextElementSibling;
    newPosOne.classList.add("active");
  } else {
    alert(`Winner!`);
  }
};


document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    playerMove(playerOnePos);
    playerOnePos = document.querySelector("#player1-race .active");
  }
  if (event.key === "p") {
    playerMove(playerTwoPos);
    playerTwoPos = document.querySelector("#player2-race .active");
  }
});
