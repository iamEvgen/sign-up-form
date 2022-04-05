const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

const letter = document.querySelector('#letter');
const capital = document.querySelector('#capital');
const number = document.querySelector('#number');
const length = document.querySelector('#length');

const equalPasswords = document.querySelector('.equalPasswords');

password.onfocus = function() {
    document.querySelector('.passwordCheker').style.display = "block";
}

password.onblur = function() {
    document.querySelector('.passwordCheker').style.display = "none";
}

password.onkeyup = function() {
    const lowerCaseLetters = /[a-z]/g;
    if(password.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    const upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    const numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    if(password.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
}

confirmPassword.onfocus = function() {
    document.querySelector('.equalPasswords').style.display = "block";
}

confirmPassword.onblur = function() {
    document.querySelector('.equalPasswords').style.display = "none";
}

confirmPassword.onkeyup = function() {
    console.log(password.textContent);
    console.log(confirmPassword.textContent);
    if (password.value === confirmPassword.value) {
        equalPasswords.textContent = '✔ passwords match';
        equalPasswords.style.color = 'green';
    } else {
        equalPasswords.textContent = '✖ passwords do not match';
        equalPasswords.style.color = 'red';
    }
}