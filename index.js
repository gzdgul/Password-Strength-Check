const element_input = document.getElementById('input');
const element_result_h = document.getElementById('result_h');
const element_progressBar = document.getElementById('progressBar');
let upperCaseElements = [];
let numberElements = [];
let specialElements = [];
let passwordLength = null;
let passwordStrength = '';
function checkPassword () {
    let password = element_input.value;
    password = password.split('');
    passwordLength = password.length;
    password.forEach((x) => {
       if ( isCharacterALetter(x) === true ) {
            if (x.toUpperCase() === x) {
                upperCaseElements.push(x);
            }
       }
        if (isCharacterANumber(x) === true ) {
            numberElements.push(x);
        }

        if (isCharacterASpecial(x) === true ) {
            specialElements.push(x);
        }

    });

    console.log('Password: ', password);
    console.log('Password Length: ', passwordLength);
    console.log('UPPERCASE ELEMENT INCLUDES : ', upperCaseElements.length);
    console.log('NUMBER ELEMENT INCLUDES : ', numberElements.length);
    console.log('SPECIAL ELEMENT INCLUDES : ', specialElements.length);
    console.log(upperCaseElements);
    console.log(numberElements);
    console.log(specialElements);
    checkPasswordStrength();
}

function checkPasswordStrength () {
    if (passwordLength >= 8) {
      if ((upperCaseElements.length >= 1) && (numberElements.length >= 1) && (specialElements.length >= 1)) {
          passwordStrength = 'strong';
          element_result_h.innerText = 'Your password is ' + passwordStrength;
      }
      else if ((upperCaseElements.length >= 1) && (numberElements.length >= 1)) {
          passwordStrength = 'medium';
          element_result_h.innerText = 'Your password is ' + passwordStrength;
      }
      else if ((upperCaseElements.length>= 1) && (specialElements.length >= 1)) {
          passwordStrength = 'medium';
          element_result_h.innerText = 'Your password is ' + passwordStrength;
      }
      else if ((specialElements.length >= 1) && (numberElements.length >= 1)) {
          passwordStrength = 'medium';
          element_result_h.innerText = 'Your password is ' + passwordStrength;
      }
      else {
          passwordStrength = 'weak';
          element_result_h.innerText = 'Your password is ' + passwordStrength;
      }
    }
    else {
        passwordStrength = 'weak';
        element_result_h.innerText = 'Your password is ' + passwordStrength;
    }

    if (passwordStrength === 'weak') {
        element_progressBar.style.width = '25%';
        element_progressBar.classList.remove(element_progressBar.classList.item(1));
        element_progressBar.classList.add('bg-danger');
    }
    if (passwordStrength === 'medium') {
        element_progressBar.style.width = '50%';
        element_progressBar.classList.remove(element_progressBar.classList.item(1));
        element_progressBar.classList.add('bg-warning');
    }
    if (passwordStrength === 'strong') {
        element_progressBar.style.width = '100%';
        element_progressBar.classList.remove(element_progressBar.classList.item(1));
        element_progressBar.classList.add('bg-success');
    }


    element_result_h.style.color = 'white';
    upperCaseElements = [];
    numberElements = [];
    specialElements = [];
    passwordLength = null;
    passwordStrength = '';

}


function isCharacterALetter(a) {
    return (/[a-zA-Z]/).test(a);
}

function isCharacterANumber(a) {
    return (/[0-9]/).test(a);
}
function isCharacterASpecial(a) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(a);
}
