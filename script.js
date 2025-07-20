// Rock Paper Scissors

let playerScore = 0;
let computerScore = 0;

function choose(playerChoice) {
    const options = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let result = "";
//
    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') 
        
    ) {
        result = "You`ve Won!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

//Tells you what the computer and you chose and wich of you wins.
    document.getElementById('results').innerText = `You chose: ${playerChoice}  \nComputer chose: ${computerChoice}\n\n ${result}`;
    
    drawScore();
    drawCompScore();
}

//Draws the score for the Player
function drawScore(){
    document.getElementById('playerScore').innerText = `Player: ${playerScore}`;
}
//Draws the score for the computer
function drawCompScore() {
    document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
}
//Just the restart button
function refreshPage() {
    window.location.reload();
}
