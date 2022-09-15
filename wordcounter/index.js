const textarea = document.querySelector('textarea')
const countResults = document.querySelector('.count-header')
const search = document.querySelector('.fa-magnifying-glass')
const refresh = document.querySelector('.fa-arrows-rotate')
const copy = document.querySelector('.fa-copy')





search.addEventListener('click', function(e) {
    let text = textarea.value.split(' ')
    let textlength = textarea.value.length
    
    let wordCount = 0
    text.forEach(function(word) {
        if (word !== ' '){
            wordCount++
        }
        countResults.innerHTML =  `word ${wordCount}  ${' '}  text ${textlength}`
    })
    

})

refresh.addEventListener('click', function (e) {
    location.reload()
})


// copy.addEventListener('click', function () {
//     const textcreated = document.createElement('textarea')// create new textarea element
//     const copied = textarea.innerText // set it content to be your generate password

//     // if empty
//     if (!copied) { 
//         return
//     }

//     textcreated.value = copied
//     document.body.appendChild(textcreated)
//     textcreated.select()
//     document.execCommand('copy')
//     textcreated.remove()
//     alert('copied')
// })
