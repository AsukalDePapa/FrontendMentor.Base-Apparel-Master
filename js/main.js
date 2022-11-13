function validateEmail() {
    const form = document.getElementById('form');
    const email = document.getElementById('field__email').value;
    const emailBorder = document.getElementById('field__email');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if(!email.match(emailPattern)) {
        form.classList.add('invalid');
        emailBorder.classList.add('border-invalid');
        errorMessage.innerHTML = 'Please provide a valid email';
    }

    else {
        form.classList.remove('invalid');
        emailBorder.classList.remove('border-invalid');
        errorMessage.innerHTML = ' ';
    }

    if(email == "") {
        form.classList.remove('invalid');
        emailBorder.classList.remove('border-invalid');
        errorMessage.innerHTML = ' ';
    }
}