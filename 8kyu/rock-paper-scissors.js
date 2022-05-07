// //Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.


const rps = (p1, p2) => {
     const sci = "scissors"
     const paper = "paper"
     const rock = "rock"

       if (p1 === rock && p2 === paper) {
       return "Player 2 won!"
     } else if (p1 === sci && p2 === paper) {
       return "Player 1 won!"
     } else if (p1 === paper && p2 === rock) {
       return "Player 1 won!"
     } else if (p1 === rock && p2 === sci){
       return "Player 1 won!"
     } else if (p2 === rock && p1 === paper) {
       return "Player 1 won!"
     } else if (p2 === sci && p1 === paper) {
       return "Player 2 won!"
     } else if (p2 === paper && p1 === rock) {
       return "Player 2 won!"
     } else if (p2 === rock && p1 === sci){
       return "Player 2 won!"
     } else {
       return "Draw!"
     }
};
