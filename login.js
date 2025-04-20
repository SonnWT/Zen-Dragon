const form = document.getElementById('form-box-login')
const errorElement = document.getElementById('error')

function isContainCapital(s){
    let contain = false;
    s.split('').forEach((c) => {
        if(c >= 'A' && c <= 'Z') contain = true;
    })
    return contain;
}

function isContainNumeric(s){
    let contain = false;
    s.split('').forEach((c) => {
        if(c >= '0' && c <= '9') contain = true;
    })
    return contain;
}

function isContainLowercase(s){
    let contain = false;
    s.split('').forEach((c) => {
        if(c >= 'a' && c <= 'z') contain = true;
    })
    return contain;
}

const handleFormEvent = (event) => {
    event.preventDefault();

    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    if(emailElement.value == '' || passwordElement.value == ''){
        errorElement.innerHTML = 'Every field is required';
        return;
    }

    const atSignIndex = emailElement.value.indexOf('@');
    const dotSignIndex = emailElement.value.indexOf('.');
    console.log(atSignIndex)

    if(atSignIndex == -1){
        errorElement.innerHTML = 'Email must be included \'@\'';
        return;
    }

    if(dotSignIndex == -1){
        errorElement.innerHTML = 'Email must be included \'.\'';
        return;
    }

    if(!isContainCapital(passwordElement.value) || !isContainLowercase(passwordElement.value) || !isContainNumeric(passwordElement.value)){
        errorElement.innerHTML = 'Password: lowercase, uppercase, number.';
        return;
    }

    var loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function(){
        window.location.href = 'homepagee.html';
    });
}

form.addEventListener('submit', handleFormEvent);