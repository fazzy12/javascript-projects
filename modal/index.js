const btn = document.querySelector('button')
const modal = document.getElementById('modal-container')
const wrapper = document.getElementById('wrapper')
const closeButton = document.getElementById('fa-xmark')



btn.addEventListener('click', function() {
    modal.classList.add('modal-container-open')
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.747)'
})

closeButton.addEventListener('click', function() {
    modal.classList.remove('modal-container-open')
    document.body.style.backgroundColor = ''
});