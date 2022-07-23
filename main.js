const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
 for (let i = 0; i <= 5; i++){
  playRound();
 } 
 logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection,computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round)

}

function playerChoice() {
  let input = prompt("Type rock, paper or scissors");
  while (input == null) {
    input = prompt("Please try again or check your spelling.");
  }

  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Please try again or check your spelling.");
  };
  while (input == null) {
    input = prompt("Please try again or check your spelling.");
  }
  input = input.toLowerCase();
  check = validateInput(input);
  return input;
}





function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP == choiceC) {
    return "Tie";
  } else if (
    (choiceP == "rock" && choiceC == "scissors") ||
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins(){
console.log(winners);
}

function logRound(playerChoice, computerChoice, winner, round){
  console.log('Round: ', round)
  console.log('Player chose:', playerChoice)
  console.log('Computer chose:', computerChoice)
  console.log(winner,'Won the Round')
}

game();
