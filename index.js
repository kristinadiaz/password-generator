const generateBtn = document.getElementById('generate')
const passwordEl = document.querySelectorAll('.password')

function generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '1234567890'
    const specialChar = '#$%&@^`~'
    const mathSymbols = '<*+!?='

    let characters = uppercase + lowercase + numbers + specialChar + mathSymbols
    characters = characters.split('')

    let password = ''
}

function generatePasswords() {
    
    // generate a list of passwords based on the number of password elements
    // let passwords = []
    // for(let i = 0; i < passwordEl.length; i++) {
    //     const password = generatePassword()
    //     passwords.push(password)
    // }

    // display passwords on the page
    // for(let i = 0; i < passwords.length; i++) {
    //     passwordEl[i].textContent = passwords[i]
    //     passwordEl[i].classList.remove('hidden')
    // }
}

generateBtn.addEventListener('click', generatePasswords)