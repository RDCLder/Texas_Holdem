// Corresponds to the index.html file

$(function() {

// ---------------------------------------------------------------------------------------

// Initiation

// Change the window prompts to actual, legit interface pop-ups.
// Make sure they only have valid entries (maybe a while loop).

let playerName = prompt("Enter your name", "Player Name");
const $playerName = $("#playerName").text(playerName);

var allHands = [[],];
const allHandIDs = [
    "#playerHand",
    "#botHand1", 
    "#botHand2", 
    "#botHand3", 
    "#botHand4", 
    "#botHand5", 
    "#botHand6", 
    "#botHand7",
    "#botHand8",
    "#botHand9"
]

let numBots = prompt("Enter the number of opponents", "3");
for (let i = 1; i <= numBots; i ++) {
    allHands[i] = [];
    $(allHandIDs[i] + " h2").text("Bot " + i);
}

// ---------------------------------------------------------------------------------------

// Class Definitions

class Card {

    constructor(path, value, suit) {
        this.path = path;
        this.value = value;
        this.suit = suit;
    }

}

class Deck {

    constructor() {
        this.deckArr = [
            new Card("images/AC.jpg", "ace", "clubs"),
            new Card("images/2C.jpg", "2", "clubs"),
            new Card("images/3C.jpg", "3", "clubs"),
            new Card("images/4C.jpg", "4", "clubs"),
            new Card("images/5C.jpg", "5", "clubs"),
            new Card("images/6C.jpg", "6", "clubs"),
            new Card("images/7C.jpg", "7", "clubs"),
            new Card("images/8C.jpg", "8", "clubs"),
            new Card("images/9C.jpg", "9", "clubs"),
            new Card("images/10C.jpg", "10", "clubs"),
            new Card("images/JC.jpg", "jack", "clubs"),
            new Card("images/QC.jpg", "queen", "clubs"),
            new Card("images/KC.jpg", "king", "clubs"),

            new Card("images/AS.jpg", "ace", "spades"),
            new Card("images/2S.jpg", "2", "spades"),
            new Card("images/3S.jpg", "3", "spades"),
            new Card("images/4S.jpg", "4", "spades"),
            new Card("images/5S.jpg", "5", "spades"),
            new Card("images/6S.jpg", "6", "spades"),
            new Card("images/7S.jpg", "7", "spades"),
            new Card("images/8S.jpg", "8", "spades"),
            new Card("images/9S.jpg", "9", "spades"),
            new Card("images/10S.jpg", "10", "spades"),
            new Card("images/JS.jpg", "jack", "spades"),
            new Card("images/QS.jpg", "queen", "spades"),
            new Card("images/KS.jpg", "king", "spades"),

            new Card("images/AD.jpg", "ace", "diamonds"),
            new Card("images/2D.jpg", "2", "diamonds"),
            new Card("images/3D.jpg", "3", "diamonds"),
            new Card("images/4D.jpg", "4", "diamonds"),
            new Card("images/5D.jpg", "5", "diamonds"),
            new Card("images/6D.jpg", "6", "diamonds"),
            new Card("images/7D.jpg", "7", "diamonds"),
            new Card("images/8D.jpg", "8", "diamonds"),
            new Card("images/9D.jpg", "9", "diamonds"),
            new Card("images/10D.jpg", "10", "diamonds"),
            new Card("images/JD.jpg", "jack", "diamonds"),
            new Card("images/QD.jpg", "queen", "diamonds"),
            new Card("images/KD.jpg", "king", "diamonds"),

            new Card("images/AH.jpg", "ace", "hearts"),
            new Card("images/2H.jpg", "2", "hearts"),
            new Card("images/3H.jpg", "3", "hearts"),
            new Card("images/4H.jpg", "4", "hearts"),
            new Card("images/5H.jpg", "5", "hearts"),
            new Card("images/6H.jpg", "6", "hearts"),
            new Card("images/7H.jpg", "7", "hearts"),
            new Card("images/8H.jpg", "8", "hearts"),
            new Card("images/9H.jpg", "9", "hearts"),
            new Card("images/10H.jpg", "10", "hearts"),
            new Card("images/JH.jpg", "jack", "hearts"),
            new Card("images/QH.jpg", "queen", "hearts"),
            new Card("images/KH.jpg", "king", "hearts")
        ]
    }

    deal(n) {
        let cardArr = [];
        for (let i = 0; i < n; i ++) {
            let randomIndex = Math.floor(Math.random() * this.deckArr.length);
            let card = this.deckArr[randomIndex];
            cardArr.push(card);
            this.deckArr.splice(randomIndex, 1);
        }
        return cardArr
    }

    addCardImg(cards, target) {
        for (let card of cards) {
            let $cardImg = $("<img>", {
                "src": card.path
            });
            $(target).append($cardImg);
        }
    }

    dealHole(hand, target) {
        let cards = this.deal(2);
        for (let i = 0; i < 2; i ++) {
            let $cardImg = $("<img>", {
                "src": "images/Gray_back.jpg"
            });
            $(target).append($cardImg);
            hand.push(cards[i]);
        }

    }

    flop() {
        let cards = this.deal(3);
        this.addCardImg(cards, "#community");
    }

    turn() {
        let cards = this.deal(1);
        this.addCardImg(cards, "#community");
    }

    river() {
        let cards = this.deal(1);
        this.addCardImg(cards, "#community");
    }

}

// ---------------------------------------------------------------------------------------

// Test Code Below



// ---------------------------------------------------------------------------------------

// Function Definitions

// ---------------------------------------------------------------------------------------

// Event Definitions

$("#dealButton").click(() => {

    // We will use this for initiating the first round and all consecutive rounds
    // The first thing to do is to remove every card img from the table and value in var allHands

    var deck = new Deck();

    for (let i = 0; i < allHands.length; i ++) {
        deck.dealHole(allHands[i], allHandIDs[i]);
    }

    // Once the hole cards have been dealt, we want to disable the Deal button
    // We might want to add an ante for all players
    // We set the bet to whatever the starting amount is (usually double the ante)
    // Then, players will be able to Call, Raise or Fold

})

$("#callButton").click(() => {

    // Clicking this button will match whatever the bet is

})

$("#raiseButton").click(() => {



})

$("#foldButton").click(() => {



})

$("#quitButton").click(() => {

    // Remove all cards, both images on table and whatever is stored to var allHands
    // Resets all bots to inactive
    // Removes all money

})

// deck.dealHole(i, "#playerHand");
// deck.dealHole("#dealerHand");
// deck.dealHole("#botHand1");
// deck.flop();
// deck.turn();
// deck.river();

}); // End of Script