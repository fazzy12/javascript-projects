const button = document.querySelector('button')
const firstNum = document.querySelector('.num1')
const secondNum = document.querySelector('.num2')
const input = document.querySelector('input')
const num1 = document.createElement('h1')
const num2 = document.createElement('h1')
const feedback = document.querySelector('.feedback')
const score = document.querySelector('.score')




    const number1 =  Math.floor(Math.random() * 10)
    const number2 =  Math.floor(Math.random() * 10)

        num1.innerHTML = number1
        firstNum.appendChild(num1)
        
        num2.innerHTML = number2
        secondNum.appendChild(num2)
   




button.addEventListener("click", function(){
    const val = +input.value
    const add = number1 + number2
    
    if (val === add){
        feedback.innerHTML = 'Bravo: you made it 🎉🎈🎇'
        setInterval(() => {
            location.reload()
        }, 1000);
        
    }
    
    if (val !== add){
        feedback.innerHTML = 'wrong Answer'
        setInterval(() => {
            location.reload()
        }, 2000);
    }
})