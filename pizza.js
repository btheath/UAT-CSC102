//creating function to mangage the stats
            function updateChefStats(){
                // get the current total number of pizzas from page
                let totalPizzas = parseInt(document.getElementById("divTotalPizzas").textContent);

                // get the new number of pizzas
                let newPizzaNum = parseInt(document.getElementById("numPizzas").value);

                // new total of pizzas
                let newPizzaTotal = totalPizzas + newPizzaNum;

                // variable to keep track of pizza chef level
                let chefLevel = "";

                // assign a level based on the number of pizzas
                if (newPizzaTotal > 100){
                    chefLevel = "Pizza Chef Guru;"
                }
                else if (newPizzaTotal > 80){
                    chefLevel = "Pizza Chef Extraordinaire"
                }
                else if (newPizzaTotal > 60){
                    chefLevel = "Pizza Chef Chief"
                }
                else if (newPizzaTotal > 20){
                    chefLevel = "Pizza Chef Apprentice"
                }
                else {
                    chefLevel = "Beginner"
                }

                //update pizza total on page
                document.getElementById("divTotalPizzas").textContent = newPizzaTotal;
                //update the baking level
                document.getElementById("divBakingLevel").textContent = chefLevel;
            
            }

            //set up available toppings (using array instead)
            //var topping1 = "Pepperoni";
            //var topping2 = "Sausage";
            //var topping3 = "Mushrooms";
            //var topping4 = "Ham";
            //var topping5 = "Pineapple";
            //var topping6 = "Onion";

            // add toppings to page (using array instead)
            //document.getElementById("divToppings").textContent = topping1 + ", " + topping2 + ", " + topping3 + ", " + topping4 + ", " + topping5 + ", " + topping6;


            // set up an array to hold the toppings and print them out to the page
            let arrToppings = ["Pepperoni", "Sausage", "Mushrooms", "Ham", "Pineapple", "Onion", "Bacon"];

            let arrDoughTypes = ["Thin Crust", "Regular Crust", "Thick Crust", "Stuffed Crust"];

            //variable to hold the toppings
            let toppings = "";

            for (let i = 0; i < arrToppings.length; i++){
                // each time we loop through the array, add the opping name to the toppings variable
                toppings += arrToppings[i] + "<BR>";
            }

            //show the array contents on the page
            document.getElementById("divToppings").innerHTML = toppings