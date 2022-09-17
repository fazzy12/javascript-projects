const input = document.querySelector('input')
const button = document.querySelector('button')
const divContainer = document.querySelector('.input-div')
const div = document.createElement('div')


button.addEventListener('click', () => {
    const value = input.value

    let kg = value/2.2046
    

    div.innerHTML = `${kg.toFixed(2)}kg`
    div.style.fontSize = '50px'
    div.style.marginTop = '20px'
    div.style.marginLeft = '110px'
    divContainer.appendChild(div)


    if (value < 0){
        div.innerHTML = `input is less than zero`
        div.style.color = "red"
        div.style.fontSize = "20px"
        input.innerHTML = ""
    }

    if (value === ""){
        div.innerHTML = `value required`
        div.style.color = "red"
        div.style.fontSize = "20px"
        input.innerHTML = ""
    }

    if (isNaN(value)){
        div.innerHTML = `value must be a number`
        div.style.color = "red"
        div.style.fontSize = "20px"
        input.innerHTML = ""
    }
})