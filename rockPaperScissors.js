const playerMove = process.argv[2]?.toLowerCase();
const validMoves = ["rock", "paper", "scissors"];

// Check if the player provided  a right move
if (!validMoves.includes(playerMove)) {
  console.log("Invalid move! Please choose rock, paper, or scissors.");
  process.exit(1);
}

const computerMove = validMoves[Math.floor(Math.random() * 3)];
console.log(
  "You choose " + playerMove + ". Computer chose " + computerMove + "."
);

// Determine the winner
if (playerMove === computerMove) {
  console.log("It's a draw!");
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "scissors" && computerMove === "paper") ||
  (playerMove === "paper" && computerMove === "rock")
) {
  console.log("You Won!");
} else {
  console.log("You lose!");
}
