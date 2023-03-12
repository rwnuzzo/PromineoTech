
   
// Creating a deck of cards is the first step. 52 cards, along with suits and values. 
// Make several arrays and one empty array for the eventual deck. 
const suits = ['hearts','diamonds','clubs','spades'];
const values = ['ace','2','3','4','5','6','7','8','9','10','J','Q','K'];
const deck = [];

// For loop to create deck.
// Object with two properties is pushed to deck.
for (let i = 0; i < suits.length; i ++) {
    for (let j = 0; j < values.length; j++) {
        deck.push({
            value: values[j],
            suit: suits[i]
        });
    }
}

// Interate through the turns where each player plays a card.
// Shuffle mechanism using random indexs from deck.

for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}

// The deck is "cut" here so each player gets half. 

const player1Hand = deck.slice(0, 26);
const player2Hand = deck.slice(26, 52);

let player1Score = 0;
let player2Score = 0;


// The player who plays the highest card wins turn
// Tie results in zero points for both players.
// A for loop is used to compare values of each player's cards using the values array.



(let i = 0; i < 26; i++) {
    const player1Card = player1Hand[i];
    const player2Card = player2Hand[i];

    let winner = null;

    if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)) {
        player1Score++;
        winner = "Player 1"
    } else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)) {
        player2Score++;
        winner = "Player 2"
    }
    console.log(`PLayer 1: ${player1Card.value} of ${player1Card.suit}`);
    console.log(`Player 2: ${player2Card.value} of ${player2Card.suit}`);

    if (winner) {
        console.log(`${winner} wins the round.`);
    } else {
        console.log(`Tie`);
    }
}

// After all cards have been played, display the score and declare the winner.
// Another loop is used to specify when the correct player is declared a final winner. 

console.log(`Final Score: Player 1: ${player1score}, Player 2: ${player2Score}`);

if (player1score > player2Score) {
    console.log('Player 1 wins!!');
} else if (player1Score < player2Score) {
    console.log("Player 2 Wins!!");

} else {
    console.log('Tie.');
}


