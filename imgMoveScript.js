//    <img id="memeimage" src="Images/meme.jpeg" alt="meme image">
        // this variable will keep track of the current interval ID - we are storing this ID 
        // so that we can stop the image moving
        let intervalID = 0;

        // creating another function to generate a random number for moving the img
        function getRandomNumber(){
            // get a random number and return it
            // get a random number between 0-1, multiply it by 800, round down and return it
            return Math.floor(Math.random() * 800);

        }

        function startMove(){
            //creat a shortcut to the meme image
            let imgMeme = document.getElementById("memeimage");

           intervalID = setInterval(function(){
                // create variables to give a new location for the image
                let newTop = getRandomNumber();
                let newLeft = getRandomNumber();

                // we are changing the CSS properties for the image - changing from left & top 25%
                imgMeme.style.left = newLeft + "px";
                imgMeme.style.top = newTop + "px";

                console.log("left=" + newLeft + "px");
                console.log("top=" + newTop + "px");

            }, 1000); // 1000 is in milisecond - 1000 mili is 1 sec


            // set it up so that we cannot c lick on the start button
            document.getElementById("btnStart").disabled = true;
            // set it up so that we can click on the stop button
            document.getElementById("btnStop").disabled = false;

            
        }

        // function to stop image from moving
        function stopMove(){

            // call the built in JavaScript function to stop running the code that we started running in
            // setInterval
            clearInterval(intervalID);

             // set it up so that we can c lick on the start button
            document.getElementById("btnStart").disabled = false;
            // set it up so that we cannot click on the stop button
            document.getElementById("btnStop").disabled = true;

        }