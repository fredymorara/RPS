# Rock Paper Scissors Game ✊📄✂️

A classic console-based **Rock Paper Scissors** game built in JavaScript as part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) Foundations curriculum. 

This project was built to practice core JavaScript fundamentals, including functions, conditional logic, loops, scope, and basic browser interaction using `prompt` and `alert`.

## Features

- **Interactive UI:** Uses browser `prompt()` and `alert()` dialogs to collect user choices, display round results, and track progress dynamically.
- **Computer AI:** Automatically generates a random computer choice using `Math.random()`.
- **Case-Insensitive Input:** Sanitizes user inputs (`trimEnd().toLowerCase()`) to handle various capitalizations gracefully.
- **Score Tracking:** Keeps a live tally of both the human and computer scores across a structured game session.
- **Replay Loop:** Includes a custom loop structure allowing you to continue playing rounds or exit whenever you choose.

## Built With

- **JavaScript (ES6+)**
- **HTML5** (for script execution and console/browser integration)
- **Git & GitHub** for version control

## Code Structure

- `computerChoice()`: Generates and returns a random choice ("rock", "paper", or "scissors") for the computer.
- `humanChoice()`: Prompts the user for their choice and sanitizes the input.
- `determineWinner(human, computer)`: Evaluates the rules of the game, increments the respective player's score, and returns the round outcome.
- `playRound()`: Executes a single round by combining human input, computer selection, and winner determination.
- `playGame()`: Orchestrates the overall session, tracking scores across rounds and managing the interactive play-again loop.

## How to Run

1. Clone or download this repository.
2. Open the `index.html` file in your web browser.
3. Open your browser's Developer Tools Console (`F12` or right-click -> Inspect -> Console) alongside the pop-up prompts to play the game!

---
*Built following [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) Foundations Course guidelines.*