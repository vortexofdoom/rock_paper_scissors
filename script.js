function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let plyr = playerSelection.charAt(0).toLowerCase();
    let comp = computerSelection.charAt(0).toLowerCase();

    if ((plyr === 'r' && comp === 's') || (plyr === 's' && comp === 'p') || (plyr === 'p' && comp === 'r')) {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}.`;
    } else if ((comp === 'r' && plyr === 's') || (comp === 's' && plyr === 'p') || (comp === 'p' && plyr === 'r')) {
        return `You lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}.`;
    } else {
        return "Draw!";
    }
}

function getInput(promptText) {
    while (true) {
        let input = prompt(promptText).toLowerCase();
        switch (input) {
            case "rock":
            case "paper":
            case "scissors":
                return input;
        }
    }
}

function game(promptText) {
    let rounds = NaN;
    while (!(rounds > 0)) {
        rounds = parseInt(prompt(promptText));
    }

    let playerScore = 0;
    let computerScore = 0;
    while (rounds > 0) {
        const playerSelection = getInput("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection)
        switch (round.charAt(4)) {
            case 'w':
                playerScore += 1;
                break;
            case 'l':
                computerScore += 1;
                break;
        }
        console.log(round + ` (Player: ${playerScore}, Computer: ${computerScore})`);
        rounds -= 1;
    }
}

game("How many rounds?");