# DIO Dino Game - Gustavo Ferreira
This Dino Game was a guided class by Celso Henrique at GFT bootcamp 2021 (https://github.com/celso-henrique/).

## My personal changes was:
- The dinosaur position. I tought it didn't look good attached to the corner.
- I reduced 1% of the background size so it don't create a scroll bar on the bottom.
- Created a begin function to start/reset the game.
- Added a if(isGameOver) on the handleKeyup() to use the space bar to either jump or start a new game.
- Added a leftIntervalList to map all cactus intervals and clear them in a game over event.
- Added cactusList for the same reason.
- Added a cactusTimeout to reset the setTimeout so it doesn't accumulate each game over.
- Added a min value to randomTime so it doesn't create two cactus near each other.