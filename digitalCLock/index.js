const hour = document.querySelector('.hour')
const minute = document.querySelector('.min')
const second = document.querySelector('.sec')
const period = document.querySelector('.pm')

function timer(){

    const date = new Date()
    const hr = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    
    
    
    const ampm = (hr >= 12) ? "PM" : "AM"
    
    period.innerHTML = `${ampm}`
    
    if (hr < 10) {
        hour.innerHTML = `${'0' + hr} :`
    }else{
        hour.innerHTML = `${hr} :`
    }
    
    if (min < 10) {
        minute.innerHTML = `${'0' + min} :`
    }else{
        minute.innerHTML = `${min} :`
    }



    if (sec < 10) {
        second.innerHTML = `${'0' + sec} :`
    }else{
        second.innerHTML = `${sec} :`
    }

     // sound effect
    // const audio = new Audio("clock-ticking.mp3")
    // audio.src = "/clock-ticking.mp3"
    // audio.play()
    
}
setInterval(timer, 1000)

