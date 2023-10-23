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

  const closeBtn = document.getElementById('close')

  closeBtn.addEventListener("click",() => {
    modalbg.style.display = "none"
    document.getElementById('Form').reset()
  })

  const closeBtn2 = document.getElementById('closeBtn')
  closeBtn2.addEventListener("click",() => {
    modalbg.style.display = "none"
  })

///////////////////////////////////////////////////////////////////////////////////
                          //  TEST OF THE FORM  //
///////////////////////////////////////////////////////////////////////////////////

  // Prevent default to avoid reloding the form if object not true //
  const submit = document.getElementById('submit')

  submit.addEventListener('click', (e) =>{
    e.preventDefault()

      /////////// Common Regex First & Last name + error message ///////////
        const Regex_2_20_Letters = (test) =>{
          return /^[A-Z a-z\s]{3,20}$/.test(test)
        }
        let errorMessage = `Chiffre et symboles ne sont pas autorisé. Nombre de caractères autorisés 2 à 20.`
      /////////////////////////////////////////////////////////////////////
      
      //////////////////////
      function firstNameTest(){
      /////////////////////

        // catch the entry
        const first = document.querySelector('#first').value
        const firstNameErrorMessage = document.getElementById('FirstNameErrorMessage')

        // if/else to test the regex
        if(Regex_2_20_Letters(first)){
          firstNameErrorMessage.innerHTML = ''
          document.getElementById('first').className = 'text-control'
          return true
        } else {
          firstNameErrorMessage.innerText = errorMessage
          document.getElementById('first').className = 'error-border'
          return false
        }
      }
        
      //////////////////////
      function lastNameTest(){
      /////////////////////
        
        // catch the entry
        const last = document.querySelector('#last').value
        const LastNameErrorMessage = document.getElementById('LastNameErrorMessage')

        // if/else to test the regex
        if(Regex_2_20_Letters(last)){
          LastNameErrorMessage.innerHTML = ''
          document.getElementById('last').className = 'text-control'
          return true
        } else {
          LastNameErrorMessage.innerText = errorMessage
          document.getElementById('last').className = 'error-border'
          return false
        }
      }

      //////////////////////Regex email//////////////////////
        const regexTestEmail = (test) =>{
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(test)
        }
      //////////////////////////////////////////////////////

      //////////////////////
      function emailTest(){
      /////////////////////
        const email = document.querySelector('#email').value
        const EmailErrorMessage = document.getElementById('EmailErrorMessage')

        if(regexTestEmail(email)){
          EmailErrorMessage.innerText =''
          document.getElementById('email').className = 'text-control'
            return true
        } else{
          EmailErrorMessage.innerText = "L'email n'est pas valide"
          document.getElementById('email').className = 'error-border'
          return false
        }
      }

      ////////////////////// TO FIX
      function birthday(){
      /////////////////////
        const birthdate = document.getElementById('birthdate');
        const dateRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        if (birthdate == null || !dateRegex.test(birthdate)) {
            const birthdateErrorMessage = getElementById('BirthdateErrorMessage');
            birthdateErrorMessage.innerText = 'Rentrez votre date de naissance'
            birthdate.className = 'error-border'
            return false;
        } else {
          birthdate.className = 'text-control'
          return true
            
        }
      }
      
      ////////////////////// TO FIX
      function tournaments(){
      /////////////////////
      const tournamentsInput = document.forms["form"]["quantity"].value;
        if (tournamentsInput == null) {
          const tournamentsErrorMessage = getElementById('TournamentErrorMessage');
          tournamentsErrorMessage.innerText = 'Renseignez ce champ'
          document.getElementById('quantity').className = 'error-border'
          return false;
        } else {
          tournamentsErrorMessage.innerText = ''
          document.getElementById('quantity').className = 'text-control'
          return true
        }
      }

      ////////////////////// TO TEST
      function city(){
      /////////////////////
        const radioBtn = document.querySelectorAll('input[name="location"]');
        const cityErrorMessage = document.getElementById('CityErrorMessage');
        let ErrorMessagecity = `Choisissez une ville`
        if(radioBtn.checked){
          cityErrorMessage.innerText = ''
          return true
        }else {
          cityErrorMessage.innerText = ErrorMessagecity
          return false
        }
      }
      
      ////////////////////// TO TEST
      function useCondition(){
      /////////////////////
        const checkUseCondition = document.getElementById('checkbox1')
        if (checkUseCondition == null) {
          const UseConditionsErrorMessag = getElementById('TournamentErrorMessage');
          UseConditionsErrorMessag.innerText = "Vous devez accépter les conditions d'utilisation"
          return false;
        } else {
          UseConditionsErrorMessag.innerText = ''
          return true
        }
      }

      //////////////////// Form Values ////////////////////////// TO TEST
      const formDataValues = {
        firstName: document.querySelector('#first').value,
        lastName: document.querySelector('#last').value,
        email: document.querySelector('#email').value,
        birthdate: document.querySelector('#birthdate').value,
        tournamentsQty: document.querySelector('#quantity').value,
        city: document.querySelector('#location').value,
        useCondition: document.querySelector('#checkbox1').value,
        nextEventAd: document.querySelector('#checkbox2').value, 
      }
      /////////////////////////////////////////////////////////

      /////////////////////////////////////// Check if all function true ///////////////////////////////////////////// TO TEST

      if(firstNameTest() && lastNameTest() && emailTest() && birthday() && tournaments() && city() && useCondition()){

        localStorage.setItem('formDataValues', JSON.stringify(formDataValues))
        console.log(formDataValues, 'Test')

        document.getElementById('Form').display = "none" //check TODO
        document.getElementById('Form').reset()
        
        document.getElementById('modal-confirmation').display	= "flex"
        

      }else{
        console.log('ERROR form')
      }
  })
///////////////////////////////////////////////////////////////////////////////////