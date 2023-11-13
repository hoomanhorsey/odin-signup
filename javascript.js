addEventListener('DOMContentLoaded', () => {

let pwd = document.querySelector('#password');
let confirmPwd = document.querySelector('#confirmPassword');

let subBtn = document.querySelector('button');



let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    
    let password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;


    console.log(password, confirmPassword);
    
    if (password != confirmPassword) {
        alert("passwords don't match");
        let noMatch = document.querySelector('.noMatch');

        noMatch.textContent = 'No Match';
    } else {
        alert("Passwords Match");
    }


    })

















});
