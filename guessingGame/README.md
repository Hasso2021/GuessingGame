# Guessing Game 

## Description :
Create a simple guess the number type game. It Should guess a random number between 1 and 100, then challenge the player to gess the number in 10 turns. If they are  right or wrong on a turn it should be displayed. If they are wrong a message should be displayed telling them, whether the guess is too low or high. It should also tell the player the previous guess. Game will end when the player guessed right.



### Steps :
1. Generate a random number between 1 and 100.
2. Record the turn number  the player is on.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
   * Display congratulations message and set background color green
   * Stop the player from being able to enter more guesses (this would mess the game up).
   * Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
   * Tell the player they are wrong and whether their guess was too high or too low.
   * Allow them to enter another guess.
   * Increment the turn number by 1.
8.  If it is wrong and the player has no turns left:
    * Tell the player it is game over.
    * Stop the player from being able to enter more guesses (this would mess the game up) by removing all the paragraph and disabling the input fiels and submit button.
    * Display control allowing the player to restart the game.
9.  Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1. 

### Now turn these steps into codes.









