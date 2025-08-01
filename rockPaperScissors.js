const myMove = process.argv[2]?.toLowerCase();
const validMoves = ["rock", "paper", "scissors"];

// Check if the player provided  a right move
if (!validMoves.includes(myMove)) {
  console.log("Invalid move! Please choose rock, paper, or scissors.");
  process.exit(1);
}

const computerMove = validMoves[Math.floor(Math.random() * 3)];
console.log("You chose " + myMove + ". Computer chose " + computerMove + ".");

// Determine the winner
if (myMove === computerMove) {
  console.log("It's a draw!");
} else if (
  (myMove === "rock" && computerMove === "scissors") ||
  (myMove === "scissors" && computerMove === "paper") ||
  (myMove === "paper" && computerMove === "rock")
) {
  console.log("You win!");
} else {
  console.log("You lose!");
}
