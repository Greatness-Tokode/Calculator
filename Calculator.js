let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
// Ensure that arr is defined and contains button elements
for (let i = 0; i < arr.length; i++) {
    // Add an event listener to each button
    arr[i].addEventListener("click", function(e) {
        // Check if the clicked button's inner HTML is "="
        if (e.target.innerHTML === "=") {
            try {
                // Evaluate the expression in the string and assign it back to the string
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle any errors that occur during the evaluation
                input.value = "Math Error";
            }
            
        }
        else if(e.target.innerHTML == "AC"){
            // Make the string empty
             string = "";
             // Update the input value with the current string
             input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            // Remove the last character of the string
             string = string.substring(0, string.length - 1);
             // Update the input value with the current string
             input.value = string;
        }
        else {
            // Append the clicked button's inner HTML to the string
            string += e.target.innerHTML;
            // Update the input value with the current string
            input.value = string;
        }
    });
}

