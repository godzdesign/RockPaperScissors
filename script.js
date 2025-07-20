// Rock Paper Scissors

// rock = 0
// paper = 1
// scissors = 2

let playerScore = 0;
let computerScore = 0;

function choose(playerChoice) {
    const options = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') 
        
    ) {
        result = 'You`ve Won!';
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }


    document.getElementById('results').innerText = `You chose: ${playerChoice}  \nComputer chose: ${computerChoice}\n\n ${result}`;
    
    drawScore();
    drawCompScore();
}

function drawScore(){
    document.getElementById('playerScore').innerText = `Player: ${playerScore}`;
}

function drawCompScore() {
    document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
}

function refreshPage() {
    window.location.reload();
}
