   
        // function to handle the user input of the word in the palindrome checker
        function checkPalindrome(event){
            // prevent the form from submitting
            event.preventDefault();

            // shortcut to the txtWord user input
            let userInput = document.getElementById("txtWord").value;
            console.log("userInput=" + userInput);

            // create shortcut to the output div
            let divPalinResults = document.getElementById("divPalinResults");

            // set up variable to hold if the word is a palindrome or not
            let isPalin = isPalindrome(userInput);

            // this is equivalent to isPalin == true
            if (isPalin){
                divPalinResults.textContent = userInput + " is a palindrome!";
            }

            else{
                divPalinResults.textContent = userInput + " is not a palindrome!";
            }

        }
        // function to see if string is a palindrome
        // stringToTest is what hte user entered
        function isPalindrome(stringToTest){
            // convert the string to test to lowercase because that is a better user exp for the purpose of a palindrome checker
            stringToTest= stringToTest.toLowerCase();

            // variable to reverse the contents of and set to the original string value
            let stringToReverse = stringToTest;

            // this line converts the string, takes the word and converts to an array where each letter is in its own slot
            // reverse the contents of the new array ,
            // then joins the new array so it becomes a string again (reverse of the original word)
            stringToReverse = stringToReverse.split("").reverse().join("");

            // compare the original string to the reversed string. can use == or ===
            if (stringToTest == stringToReverse){

                return true;
            }
            // as a default, return false
            return false;
        }

        console.log("radar=" + isPalindrome("radar"));
    