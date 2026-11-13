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
let winner = null;

// Function to get the computer's choice
const computerChoice = () => {
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
  const choice = prompt("Choose rock, paper, or scissors:");
  if (choice === null) return "";
  return choice.trim().toLowerCase();
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

// Function to play a single round
const playRound = () => {
  const human = humanChoice();
  const computer = computerChoice();
  const result = determineWinner(human, computer);
  return { human, computer, result };
};

// Main game function
const playGame = () => {
  let rounds = 0;

  while (rounds < 5) {
    rounds++;
    const currentRound = playRound();

    // Check if user clicked cancel or entered empty
    if (!currentRound.human) {
      console.log("Game cancelled.");
      break;
    }

    const playAgain = prompt(
      `Round ${rounds} result: ${currentRound.result}\n===================\nYou chose: ${currentRound.human}\nComputer chose: ${currentRound.computer}\n===================\nYour Score: ${humanScore} | Computer Score: ${computerScore}\n===================\nDo you want to continue to the next round? (yes/no)`,
    );

    if (playAgain === null || playAgain.trim().toLowerCase() !== "yes") {
      if (humanScore > computerScore) {
        winner = "You";
      } else if (computerScore > humanScore) {
        winner = "computer";
      } else {
        winner = "Nobody (It's a tie)";
      }
      console.log("Thanks for playing!");
      alert(
        `Thanks for playing!\n==============\nYou played ${rounds} round(s) and won ${humanScore}\nFinal winner is: ${winner}`,
      );
      break;
    }
  }

  // If they finish all 5 rounds without clicking 'no'
  if (rounds === 5) {
    if (humanScore > computerScore) {
      winner = "You";
    } else if (computerScore > humanScore) {
      winner = "computer";
    } else {
      winner = "Nobody (It's a tie)";
    }
    alert(
      `Game Over!\n==============\nFinal Score:\nYou: ${humanScore} | Computer: ${computerScore}\nFinal winner is: ${winner}`,
    );
  }
};

// Start the game loop
playGame();
