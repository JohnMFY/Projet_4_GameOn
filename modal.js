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
///////////////////////////////////////////////////////////////////////////////////

// Prevent default to avoid reloding the form if object not true //
const Submit = document.getElementById('submit')

Submit.addEventListener('click', (e) =>{
  e.preventDefault()

  //do a common Regex for first & last name + error message
  const Regex_2_20_Letters = (regex) =>{
    return /^[A-Z a-z\s]{3,20}$/.test(regex)
  }
  let errorMessage = `Chiffre et symboles ne sont pas autorisé. Nombre de caractères autorisés 2 à 20.`

    //////////////////////
    function FirstName(){
    /////////////////////

      // catch the entry
      const first = document.querySelector('#first').value
      const FirstNameErrorMessage = document.getElementById('FirstNameErrorMessage')

      // if/else to test the regex
      if(Regex_2_20_Letters(first)){
       FirstNameErrorMessage.innerHTML = ''
       return true
      } else {
        FirstNameErrorMessage.innerText = errorMessage
        return false
      }
    }
    
    //////////////////////
    function LastName(){
    /////////////////////
      
      // catch the entry
      const last = document.querySelector('#last').value
      const LastNameErrorMessage = document.getElementById('LastNameErrorMessage')

      // if/else to test the regex
      if(Regex_2_20_Letters(last)){
        LastNameErrorMessage.innerHTML = ''
        return true
      } else {
        LastNameErrorMessage.innerText = errorMessage
        return false
      }
    }
 })

  // Last name = same

// Data recuperation //
    
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

  // cross to close the form don't work put an event listener to close the form penser a faire un switch à la fermeture pour pas revenir sur la validation


  //prevent default