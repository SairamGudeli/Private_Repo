document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here, you'd typically send this data to a server for authentication
        // For demonstration purposes, we'll just log them
        console.log('Username:', username);
        console.log('Password:', password);

        // After authentication, you can redirect the user or perform other actions
        // For now, let's assume the login was successful
        alert('Login Successful!');
    });
});
