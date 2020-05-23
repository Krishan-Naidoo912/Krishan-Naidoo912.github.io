let p1Button = document.querySelector("#p1Button");
let p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
let p1Score = 0;

let p2Button = document.querySelector("#p2Button");
let p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
let p2Score = 0;

let winningScoreSet = document.querySelector("#winningScoreSet");
let winningScoreDisplay = document.querySelector("#winningScoreDisplay");
let winningScore = 0;

let winnerDisplay = document.querySelector("#winnerDisplay");

let gameOver = false;
let resetGame = document.querySelector("#resetButton");

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score = p1Score + 1;
		p1ScoreDisplay.textContent = p1Score;
	}
	if(p1Score === winningScore) {
		p1ScoreDisplay.classList.add("winner");
		winnerDisplay.textContent = "Player One Wins!"
		gameOver = true;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score = p2Score + 1;
		p2ScoreDisplay.textContent = p2Score;
	}
	if(p2Score === winningScore) {
		p2ScoreDisplay.classList.add("winner");
		winnerDisplay.textContent = "Player Two Wins!"
		gameOver = true;
	}
});

winningScoreSet.addEventListener("change", function() {
	winningScoreDisplay.textContent = winningScoreSet.value;
	winningScore = Number(winningScoreSet.value);
	reset();
});

resetGame.addEventListener("click", function(){
	reset();
});

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = 0;
	p2ScoreDisplay.textContent = 0;
	p1ScoreDisplay.classList.remove("winner");
	p2ScoreDisplay.classList.remove("winner");
}