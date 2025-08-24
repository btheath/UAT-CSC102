  let arrProblems = [
            ["Crowdstrike", 2024, "$5.4B", "Faulty update to security software"],
            ["Facebook", 2020, "$90M", "Misconfig which caused downtime"],
            ["Citibank", 2020, "$900M", "Mistaken transfer"],
            ["Mars Climate Orbiter", 1999, "$327M", "Metric vs Imperial measurement issue"],
            ["NASA Mariner", 1962, "$18.5M", "Syntax error in guidance system's code"]
        ];

        // for loop to loop through the rows
        for(let i=0; i<arrProblems.length; i++){
            // create a tr tag
            let tr = document.createElement("tr");
            // for loop for each column of data
            for (let j=0; j<arrProblems[i].length; j++){
                // create td tag for each piece of data in the row/array
                let td = document.createElement("td");
                //set the data from row i and column j to the td we just created
                td.textContent = arrProblems[i][j];
                // add td to the tr
                tr.appendChild(td);

            }
            // add the row to the table
            document.getElementById("tabledata").appendChild(tr);
        }