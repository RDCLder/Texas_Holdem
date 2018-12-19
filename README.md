# Texas Hold 'Em

Coming Soon!

## General

Version: Pre-Alpha

This is a fully-playable Texas Hold 'Em simulator that features decision-making bots.

### Changelog

### Current Features

- Fully-Supported Texas Hold 'Em
    - Supports all rules and features of heads up, no-limit Texas Hold 'Em
    - Supports a betting system

- Decision-Making Bots
    - Bots will use an API to determine odds of winning/losing/drawing a round.
    - Bots will either call a bet, raise a bet, or fold with a certain element of randomness.
    - Choose how many bots to play against (between 1-9) to simulate traditional table sizes.

### Upcoming Features

- Animations and Sound Effects
    - jQuery will be used to animate cards and add other effects
    - Sound effects and customizable music will be added to the background

- Personal Accounts & Game History
    - Fully trackable win/loss history
    - Recordable games that can be reviewed anytime
    - Play against other players

---

## For Developers

### Bugs

### To Do

- Tie gameplay to buttons (Deal, Call, Raise, Fold, Quit)
    - See notes in index.js file for each button's event listener

- Implement hand checking feature to see game outcomes (win, lose, draw)
    - When checking, be sure to add community cards for each
    - Tie this to betting system

- Make API calls for each bot to see their outcome odds (win, lose, draw)
    - Determine the exact cutoffs for each action
        - e.g. what outcome percentages to call, raise, fold

- Implement feature where you make an API call to see your own outcomes (like a hint button)
    - See if you can breakdown the odds by card combination (e.g. full house, three-of-a-kind, etc.)

- Improve the basic UI design
    - Make sure all the player squares (lime green background) are within the table bounddaries
    - Maybe rearrange button layout and the community/pot layout
    - Decide where best to put everything inside a player square
        - Where to put the name, the amount of money, the cards themselves

- Make the UI responsive
    - See project guidelines on schoology for exact dimensions the UI needs to be readable at
    - Implement the min sizes for everything at those dimensions
        - Will probably require reworking element sizes in css file to make sizes by percentage instead of pixel
        - If so, this will require making sure no elements go out of bounds of their parent containers

---