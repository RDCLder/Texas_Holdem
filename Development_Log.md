# Development Log

## Bugs

- TBD

---

## To Do

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