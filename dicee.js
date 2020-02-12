document.query

function randomNum() {
  var randomNum = (Math.random() * 6) + 1;
  randomNum = Math.floor(randomNum);
  return randomNum;
}

var rand1 = randomNum();
document.querySelector(".img1").src = "images/dice" + rand1 + ".png";

var rand2 = randomNum();
document.querySelector(".img2").src = "images/dice" + rand2 + ".png";

if (rand1 > rand2) {
  document.querySelector(".win-text").textContent = "🚩Player 1 Wins!";
} else if (rand2 > rand1) {
  document.querySelector(".win-text").textContent = "Player 2 Wins!🚩";
} else {
  document.querySelector(".win-text").textContent = "🚩Its a draw!🚩";
}
