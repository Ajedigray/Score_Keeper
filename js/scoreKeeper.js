var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.getElementById("input");
var p2Score = 0;
var p1Score = 0;
var winningScoreDisplay = document.getElementById("winning_score");
var p1Display = document.getElementById("p1_score");
var p2Display = document.getElementById("p2_score");
var gameOver = false;


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === parseInt(winningScoreDisplay.textContent)){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;		
	}

});

p2Button.addEventListener("click", function (){
	if(!gameOver){
		p2Score++;
		if(p2Score === parseInt(winningScoreDisplay.textContent)){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;		
	}
});

resetButton.addEventListener("click", function (){
	reset();
});

numInput.addEventListener("change", function (){
	winningScoreDisplay.textContent = this.value;
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	winningScoreDisplay.textContent = numInput.value;
	gameOver = false;
}
