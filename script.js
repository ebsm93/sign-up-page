const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('signUpForm');
const errorMsg = document.getElementsByClassName('errorMsg');

form.addEventListener('submit', (e) => {
    // let messages = []

    // if (password.value !== confirmPassword.value) {

    //     messages.push('passowords do not match');
    // }

    // if (messages.length > 0) {
    //     e.preventDefault();
    //     errorMsg.textContent = messages.join(', ');
    // }

        e.preventDefault();
    
});


