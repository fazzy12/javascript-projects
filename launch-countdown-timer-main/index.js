
const dayEl = document.querySelector('.day')
const hoursEl = document.querySelector('.hours')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')





const countDownDay = new Date('Dec 25, 2022 00:00:00').getTime()

const contDownFunction = setInterval(function () {
    const currentDay = new Date().getTime()
    const period = countDownDay - currentDay
    
    let days = Math.floor(period / (1000 * 60 * 60 * 24))
    let hours = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((period % (1000 * 60)) / 1000)


    dayEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds

    
}, 1000)