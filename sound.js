 // function to add audio element to the page and show the buttons
        function addSound(){
            //shotcut to play button
            let btnPlay = document.getElementById("btnPlay");
            // shortcut to pause button
            let btnPause = document.getElementById("btnPause");
            // shotcut to add sound button
            let btnAddSound = document.getElementById("btnAddSound");
            // create audio element
            let audSpace = document.createElement("audio");

            // give audio element an ID
            audSpace.setAttribute("id", "audSpace");

            // add the controls attribute so we can see element on page
            audSpace.setAttribute("controls", "controls");

            //set up the source for the audio file
            audSpace.setAttribute("src", "us-lab-background.mp3");

            // adding the audio element to the page
            document.body.appendChild(audSpace);

            btnPlay.hidden=false;
            btnPause.hidden=false;
            btnPause.disabled=true;
            btnAddSound.hidden=true;


        }

        //function to start playing the audio element
        function playSound(){
            let audio = document.getElementById("audSpace");

            // play the audio
            audio.play();

            let btnPlay = document.getElementById("btnPlay");
            
            let btnPause = document.getElementById("btnPause");

            
            btnPlay.disabled=true;
            btnPause.disabled=false;
        }

        //function to pause the playing of the element
        function pauseSound(){
            let audio = document.getElementById("audSpace");

            // pause the audio
            audio.pause();

            btnPlay.disabled=false;
            btnPause.disabled=true;
        }

       

        