const chars = String.fromCharCode(...Array(123).keys()).slice(33)
let passwords = []
const passwordLength = 15
const generateEl = document.getElementById('generate')
let boxes = document.querySelectorAll('.box')
const clearEl = document.getElementById('clear')

generateEl.addEventListener('click', function() {
    getRandomPassword()
})

clearEl.addEventListener('click', function() {
    clearAllFields()
})

function getRandomPassword () {
   for(let i = 0; i < 4; i++) {
    //    4 are for the password boxes
       let randomPassword = ''
       for(let j = 0; j < passwordLength; j++) {
           randomPassword += chars.charAt(Math.floor(Math.random() * chars.length))
       }
       passwords.push(randomPassword)
   }
   for(let k = 0; k < boxes.length; k++) {
       boxes[k].textContent = passwords[k]
   }
}

function clearAllFields() {
    boxes.forEach(item => {
        item.textContent = ''
    })
}