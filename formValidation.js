function validateForm(){
            // get the user's first name so we can validate it
            let firstName = document.getElementById("txtFirstName").value;

            // get the user's last name so we can validate it
            let lastName = document.getElementById("txtLastName").value;

            // get the user's zip code so we can validate it
            let zipCode = document.getElementById("txtZip").value;

            // creating variable for firstName + lastName
            let fullName = firstName + " " + lastName;

            let divMessage = document.getElementById("divMessage");
            
            console.log("firstName=" + firstName);
            console.log("lastName=" + lastName);
            console.log("zipCode=" + zipCode);
            console.log("fullName=" + fullName);
        
        // if statement not allowing first name field to be blank
        if (firstName.trim() == ""){
            divMessage.innerHTML = "First name cannot be blank."

            return false;
        }
        // if statement not allowing last name field to be blank
        if (lastName.trim() == ""){
            divMessage.innerHTML = "Last name cannot be blank."

            return false;
        }
        // if statement not allowing zip code field to be blank
        if (zipCode.trim() == ""){
            divMessage.innerHTML = "Zip code cannot be blank. Please enter valid 5 digit zip code."

            return false;
        }
 
        // if statement requiring fullName length to be 20 characters or less
        if (fullName.length == 1 || fullName.length > 20){
            divMessage.innerHTML = "Invalid name entry. 20 character limit. Please reenter.";
        }
        // else if statement requiring exactly 5 characters for zipcode. I added the isNaN condition as I wanted the field to require numerical entry
        else if (zipCode.length != 5 || isNaN(zipCode)){
            divMessage.innerHTML = "Invalid zip code entered. Please enter a valid 5 digit zip code.";

            //the numerical requirement wouldn't run without adding this. unsure why
            return false;

        }
        //if none of the above conditions are met, this else statement will run thanking user for properly inserting their info
        else{
            divMessage.innerHTML = "Thank you, " + fullName + "! You did it!";
        }
        return false;
    }