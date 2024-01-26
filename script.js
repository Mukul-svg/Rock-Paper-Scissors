function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(choice, computerChoice);

    displayChoices(choice, computerChoice);

    document.getElementById('result').innerHTML = `You chose ${choice}. Computer chose ${computerChoice}. Result: ${result}`;
}

function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayChoices(player, computer) {
    const playerChoiceElement = document.getElementById('playerChoice');
    const computerChoiceElement = document.getElementById('computerChoice');

    playerChoiceElement.style.backgroundImage = `url('${player}.png')`;
    computerChoiceElement.style.backgroundImage = `url('${computer}.png')`;

    setTimeout(() => {
        playerChoiceElement.style.transform = 'translateY(-30px)';
        computerChoiceElement.style.transform = 'translateY(-30px)';
    }, 100);

    setTimeout(() => {
        playerChoiceElement.style.transform = 'translateY(0)';
        computerChoiceElement.style.transform = 'translateY(0)';
    }, 600);
}
