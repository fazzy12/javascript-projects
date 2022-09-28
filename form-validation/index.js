const btn  = document.querySelector('button')

// inputs
const userName = document.querySelector('#input-username')
const mailInput = document.querySelector('#input-Email')
const phoneInput = document.getElementById('input-phone')
const passwordEl = document.querySelector('#input-password')
const passwordConfirmEl = document.querySelector('#input-password-confirm')

// labels
const userLabel = document.querySelector('.user-label')
const emailLabel = document.querySelector('.email-label')
const phoneLabel = document.querySelector('.phone-label')
const passwordLabel = document.querySelector('.password-label')
const passwordMatchLabel = document.querySelector('.password-match-label')


// icons
const eyeOne = document.querySelector('.fa-eye-slash')
// const eyeTwo = document.querySelector('.lock1')


// username function
function usernameFunction() {
    let userval = userName.value

    if (userval.length < 5){
        userLabel.textContent = 'username must be greater than 5 characters!🚫'
        userLabel.style.color = 'red'
        userLabel.style.fontSize = '10px'
    }else{
        userLabel.textContent = 'good choice 👌'
        userLabel.style.color = 'green'
        userLabel.style.fontSize = '10px'
    }

    if (userval === ""){
        userLabel.textContent = 'input cannot be empty' 
        userLabel.style.color = 'red'
        userLabel.style.fontSize = '10px'
    }
}


// email function
function emailFunction(){
    let mail = mailInput.value
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (mail.match(format)) {
        emailLabel.innerHTML = 'valid email address 👌'
        emailLabel.style.color = 'green'
        emailLabel.style.fontSize = '10px'
    }else{
        emailLabel.innerHTML = 'Invalid email address 🚫'
        emailLabel.style.color = 'red'
        emailLabel.style.fontSize = '10px'
    }

    if (mail === ""){
        emailLabel.innerHTML = 'input cannot be empty'
    }
}

// phone number function
function formatPhone() {
    let phoneVal = phoneInput.value


    let regex1 = /^[+][2][3][4]\d{11}$/
    let regex2 = /^[0][8][0]\d{8}$/
    let regex3 = /^[2][3][4]\d{11}$/

    if (regex1.test(phoneVal) || regex2.test(phoneVal) || regex3.test(phoneVal)){
            phoneLabel.innerHTML = 'number is correct'
            phoneLabel.style.color = 'green'
            phoneLabel.style.fontSize = '10px'
    }else{
        phoneLabel.innerHTML = 'invalid phone number'
        phoneLabel.style.color = 'red'
        phoneLabel.style.fontSize = '10px'
    }

    if (phoneVal === ""){
        phoneLabel.innerHTML = 'input cannot be empty'
        phoneLabel.style.color = 'red'
        phoneLabel.style.fontSize = '10px'
    }


}  

function passwordFunction() {
    let password = passwordEl.value

    // check password length
    if (password.length < 6){
        passwordLabel.innerHTML = 'password must be at least 6 characters long'
        passwordLabel.style.color = 'red'
        passwordLabel.style.fontSize = '10px'
    }

    if (password === ""){
        passwordLabel.innerHTML = 'input cannot be empty'
        passwordLabel.style.color = 'red'
        passwordLabel.style.fontSize = '10px'
    }




}

function viewHide(el){
    // hide show password field
    if(passwordEl.type === 'password'){
        passwordEl.type = 'text'
        passwordConfirmEl.type = 'text'
    }else{
        passwordEl.type = 'password'
        passwordConfirmEl.type = 'password'
    }


    if(passwordConfirmEl.type === 'password'){
        passwordConfirmEl.type = 'text'
    }else{
        passwordConfirmEl.type = 'password'
    }
} 


// event listener
btn.addEventListener('click', function(e) {
    // check for username
    usernameFunction()
    // check for valid email address
    emailFunction()
    // check for phone number
    formatPhone()
    // check for password
    passwordFunction()
})

eyeOne.addEventListener('click', function (e) {viewHide()})
eyeTwo.addEventListener('click', function (e) {})
