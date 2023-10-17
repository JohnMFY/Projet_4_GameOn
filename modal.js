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
                        //  CLOSE BUTTON FOR MODAL //
///////////////////////////////////////////////////////////////////////////////////

  const close = document.getElementById('close')
  close.addEventListener("click",() => {
    console.log('test')
  })

///////////////////////////////////////////////////////////////////////////////////
                          //  TEST OF THE FORM  //
///////////////////////////////////////////////////////////////////////////////////


// Prevent default to avoid reloding the form if object not true //
const Submit = document.getElementById('submit')

Submit.addEventListener('click', (e) =>{
  e.preventDefault()

  /////////// Common Regex for first & last name + error message ///////////
    const Regex_2_20_Letters = (test) =>{
      return /^[A-Z a-z\s]{3,20}$/.test(test)
    }
    let errorMessage = `Chiffre et symboles ne sont pas autorisé. Nombre de caractères autorisés 2 à 20.`
  /////////////////////////////////////////////////////////////////////////
    //////////////////////
    function FirstNameTest(){
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
    function LastNameTest(){
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


  //////////////////////Regex email//////////////////////
    const regexTestEmail = (test) =>{
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(test)
    }
  ////////////////////////////////////////////

    //////////////////////
    function emailTest(){
    /////////////////////
      const email = document.querySelector('#email').value
      const EmailErrorMessage = document.getElementById('EmailErrorMessage')

      if(regexTestEmail(email)){
        EmailErrorMessage.innerText =''
          return true
      } else{
        EmailErrorMessage.innerText = "L'email n'est pas valide"
        return false
      }
    }


})

// Data recuperation //

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

//penser a faire un switch à la fermeture pour pas revenir sur la validation