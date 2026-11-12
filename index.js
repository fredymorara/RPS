console.log("Hello, Welcome to our Rock Paper Scissors game!");

/*Psuedo code for a console Rock Paper Scissors game;
1. The game will prompt the user to choose between Rock, Paper, or Scissors.
2. The computer will randomly select Rock, Paper, or Scissors.
3. The game will compare the user's choice with the computer's choice to determine the winner.
4. The game will display the result of the match (win, lose, or tie) to the user.
5. The game will store the user's score and the computer's score as the first round is played.
6. The game will ask the user if they want to play again.
7. If the user chooses to play again, the game will repeat from step 1 while keeping track that this is the second round and n rounds to come.
8. If the user chooses not to play again, the game will end and display a goodbye message. */

// Variables to track and keep scores
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
const computerChoice = () => {
  // Generate a random number between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// Function to get the human's choice
const humanChoice = () => {
  // Prompt the user for their choice
  const choice = prompt("Choose rock, paper, or scissors:");
  return choice.trimEnd().toLowerCase();
};

// Function to determine the winner
const determineWinner = (human, computer) => {
  if (human === computer) {
    return "It's a tie!";
  }
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    return "You win!";
  }
  computerScore++;
  return "You lose!";
};

// Main game function
const playGame = () => {
  const human = humanChoice();
  const computer = computerChoice();
  const result = determineWinner(human, computer);
  console.log(
    `${result}\nYour Score:${humanScore} While ComputerScore: ${computerScore}`,
  );
  const playAgain = prompt(
    `${result}\nYour Score:${humanScore} While ComputerScore: ${computerScore}\nYou chose: ${human}\nComputer chose: ${computer}\n${result}\n Do you want to play again? (yes/no)`,
  );
  if (playAgain === "yes") {
    playGame();
  } else {
    console.log("Thanks for playing!");
  }
};

playGame();
