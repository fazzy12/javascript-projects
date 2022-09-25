const btn  = document.querySelector('button')

// inputs
const userName = document.querySelector('#input-username')
const mailInput = document.querySelector('#input-Email')
const phoneInput = document.getElementById('input-phone')

// labels
const userLabel = document.querySelector('.user-label')
const emailLabel = document.querySelector('.email-label')
const phoneLabel = document.querySelector('.phone-label')


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
        userLabel.textContent = 'username input cannot be empty' 
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
        emailLabel.innerHTML = 'email input cannot be empty'
    }
}

// phone number function
function formatToPhone() {
    let phoneVal = phoneInput.value


    // check countryCode
    let countryCode = phoneVal.substring(0, 3).split()
    console.log(countryCode)
    
    // if (countryCode === '234') {
    //     phoneLabel.innerHTML = 'please enter country code'
    //     phoneLabel.style.color = 'red'
    //     phoneLabel.style.fontSize = '10px'
    // }

    // if (countryCode ===)
    
    // else{
    //     phoneLabel.innerHTML = 'number is correct'
    //     phoneLabel.style.color = 'green'
    //     phoneLabel.style.fontSize = '10px'
    // }

    //check length of phone number
    if (phoneVal.length <= 10) {
        phoneLabel.innerHTML = 'Please enter a valid phone number'
        phoneLabel.style.color = 'red'
        phoneLabel.style.fontSize = '10px'
    }
    if(phoneVal.length >= 12){
        phoneLabel.innerHTML = 'Please enter a valid phone number'
        phoneLabel.style.color = 'red'
        phoneLabel.style.fontSize = '10px'
    }
}  


// event listener
btn.addEventListener('click', function(e) {
    // check for username
    usernameFunction()
    // check for valid email address
    emailFunction()
    // check for phone number
    formatToPhone()

    // check for password
    // check if password match
})