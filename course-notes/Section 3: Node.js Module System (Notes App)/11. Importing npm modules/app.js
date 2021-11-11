// import modules and other files
const validator = require('validator')
const getNotes = require('./notes.js')

// print function results
console.log(getNotes())

console.log(validator.isEmail('argemflores@gmail.com')) // returns true
console.log(validator.isEmail('gmail.com')) // returns false

console.log(validator.isURL('https://argemflores.github.io/argemflores')) // returns true
console.log(validator.isURL('https:/argemflores.github.io/argemflores')) // returns false
