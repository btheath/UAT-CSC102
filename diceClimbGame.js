   
                // GAME RULES 
                //- Reach a score of 100 in the fewest turns possible
                //- Score over 100 and you bust and start over
                //- roll a 1 on either die and you get -10 pts
                //- roll the sum of 7 or 11 and get +15 pts instead
                //- roll the same # and you get the sum of your roll * 2
                
                // setting variables used for my game
                    let total = 0;
                    let turn = 0;
                    let gameOver = false;

                // this function to simulate rolling 6-sided die (same one used in class)
                function rollDie(){
                    // multiply random number between 0-1 by 6 to get random dice roll
                    let randomNumber = Math.random() * 6;
                    // roud the number up to the next whole number
                    randomNumber = Math.ceil(randomNumber);
                    // return the random number that was generated                    
                    return randomNumber;
                }
             

                // this function will allow us to play our game
                function playDiceClimb(){
                    // if gameOver is false, playDiceClimb can run
                    if (gameOver) return;

                    // This line clears out the "finalResult" textcontent when restart game is pressed
                    document.getElementById("finalResult").textContent = "";

                    // you can display helpful messages to the console to track what's going on
                    console.log("playDiceClimb function called");

                    // setting up 2 variables to hold the 2 dice rolls from the dice game
                    let die1 = rollDie();
                    let die2 = rollDie();

                    // console log to simply check to make sure things are working
                    console.log("die1=" + die1);
                    console.log("die2=" + die2);

                    console.log("total=" + total);
                    console.log("turn=" + turn);

                    let sum = die1 + die2;
                    // testing the sum
                    console.log("sum=" + sum);
                    
                    // adds a +1 counter to the turn variable
                    turn++;

                    // creating message variable which outputs the 'turn' # and what was rolled on die1/2 and the sum.
                    // added \n as I was getting weird spacing without it
                    let message = "Turn " + turn + ": You Rolled " + die1 + " + " + die2 + " = " + sum + "\n";
                    // this variable is used at the end and populates when the game has ended
                    let finalResult = "Stop!! \n";
                                    
                    // if statement for when either die hits a 1 player gets -10pts
                    if (die1 == 1 || die2 == 1) {
                    // using -= to subtract value from 'total' variable and assign the result back to that variable
                    total -= 10;
                    // using += to add text to my exisiting 'message' variable
                    message += `...Yikes! You rolled a 1! You get -10 points.`;

                    }
                    // else if statement for when die sum totals 7 or 11 player gets 15 points
                    else if (sum == 7 || sum == 11) {
                    // using += to add value to 'total' variable and assign the result back to that variable
                    total += 15;
                    message += "Lucky total (" + sum + ")! Enjoy your +15 points!";
                    }
                    // if die1/2 are equal, player gets sum * 2
                    else if (die1 == die2) {
                    // created variable 'points' for the sum * 2
                    let points = sum * 2;
                    // total variable adds/replaces exisiting # with previous # + 'points'
                    total += points;
                    message += "Doubles! +" + points + " points.";
                    } 
                    // this final else statement is just the normal rule when one of the above if statements aren't met
                    else {
                    // total is increased by the sum of the roll
                    total += sum;
                    message +=  " points.";
                  }

                    // taking my div elements and changing the text using my message and total variables
                    document.getElementById("result").textContent = message;  
                    document.getElementById("total").textContent = "Total Score: " + total;
                    
                    
                    message += "\nTotal score: " + total;

                    // these if statements are the game winning/losing conditions. 
                    // an exact 100 will show you win
                    if (total === 100){
                        finalResult += "You landed on 100 exactly! You win!";
                        // switching variable to true prevents play button from working until restart game is chosen
                        gameOver = true;
                        document.getElementById("finalResult").textContent = finalResult; 
                    }
                    // if total lands greater than 100, you lose
                    else if (total > 100){
                        finalResult += "You busted! Try again";
                        // assigning gameOver variable 'true' results in "play Dice Climb" button to cease function
                        gameOver = true;
                        document.getElementById("finalResult").textContent = finalResult; 
                    }
                    
                               }

                    // function for 'Restart Game' button. Sets variables back to 0. Sets gameOver back to false
                    // allows Play Dice Climb to be pressable again
                   function restartDiceClimb(){
                        total = 0;
                        turn = 0;
                        gameOver = false;
                        // when pressed, adjusted textcontent for finalResult variable is displayed
                        document.getElementById("finalResult").textContent = "Game restarted. Let's go again!"
                    }    