/* 
create an array that holds all possible characters
button to generate 4 random password options
display password options
*/
const chars = String.fromCharCode(...Array(123).keys()).slice(33)
let passwords = []
const passwordLength = 15

function getRandomPassword () {
   for(let i = 0; i < 4; i++) {
    //    4 are for the password boxes
       let randomPassword = ''
       for(let j = 0; j < passwordLength; j++) {
           randomPassword += chars.charAt(Math.floor(Math.random() * chars.length))
       }
       passwords.push(randomPassword)
       console.log(randomPassword)
   }
}
getRandomPassword()
