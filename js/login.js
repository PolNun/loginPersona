const btnLogin = document.getElementById('btnLogin');
const inputUsername = document.getElementById('input_username');
const inputPassword = document.getElementById('input_password');
const divErrorMessage = document.getElementById('error_message');
const baseUrl = 'http://localhost:8081';

btnLogin.addEventListener('click', async () => {
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

    if (response.ok) {
        window.location.href = 'inicio.html';
    }
});