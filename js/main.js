const btnLogin = document.getElementById('btnLogin');
const inputUsername = document.getElementById('input_username');
const inputPassword = document.getElementById('input_password');
const divErrorMessage = document.getElementById("error_message");
const regexUsername = /^[a-zA-Z0-9]+$/;
const regexPassword = /^[^=;"]+$/;

const baseUrl = 'http://localhost:8081';

function validateUsername() {
    if (regexUsername.test(inputUsername.value)) {
        inputUsername.classList.remove('is-invalid');
    } else {
        inputUsername.classList.add('is-invalid');
    }
}

function validatePassword() {
    if (regexPassword.test(inputPassword.value)) {
        inputPassword.classList.remove('is-invalid');
    } else {
        inputPassword.classList.add('is-invalid');
    }
}

inputUsername.addEventListener('blur', validateUsername);
inputPassword.addEventListener('blur', validatePassword);

function validateForm() {
    if (regexUsername.test(inputUsername.value) && regexPassword.test(inputPassword.value)) {
        return true;
    } else {
        return false;
    }
}

btnLogin.addEventListener('click', async () => {
    if (validateForm()) {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: inputUsername.value,
                password: inputPassword.value
            })
        });

        const data = await response.json();
        console.log(data);
    }
});