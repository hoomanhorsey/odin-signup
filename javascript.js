addEventListener('DOMContentLoaded', () => {

let pwd = document.querySelector('#password');
let confirmPwd = document.querySelector('#confirmPassword');
let subBtn = document.querySelector('button');



let form = document.querySelector('form');

// form.addEventListener('submit', (e) => 
subBtn.addEventListener('click', (e) =>

{
    
    let password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    const noMatch = document.querySelector('.noMatch');

    console.log(password, confirmPassword);
    if ((!password === " ")|| (!confirmPassword ===" ")) {
        noMatch.textContent = "*Please enter a password";
        console.log(password, confirmPassword)
    }
    if (password != confirmPassword) {
        
        noMatch.textContent = "*Passwords don't match!";
    } else {
        noMatch.textContent = 'Passwords Match. Good job!';

    }


    })

















});
