function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Data recuperation //

  //do a common Regex for first & last name
    // First name = fonction catch the entry with a querySelector & put if(regex ok = true)/else = false 
    // Last name = same
    
    //Email = function => catch the entry regex email test => if/else

    //Birthday = faire un check si no valeur = error | use a date regex
    //tournaments = faire un check si no valeur = error | num regex

    // radio city search how to listen radio & error if no selection
    // checkbox use condition check si check on if not => error
    // checkbox ad listen to get the data

// IF ALL TRUE = collecting value //

  //create on object from the data
  // send the data in Local Storage (JSON.stringify)

// User Friendly//

  // maybe put a popup to tell the form is send


// /!\ TO FIX /!\ //

  // cross to close the form don't work