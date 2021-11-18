// import modules and other files
const chalk = require('chalk')
const getNotes = require('./notes.js')

// store command
const command = process.argv[2]

// do command
if (command === 'add') {
    // add note
    console.log('Adding note!')
} else if (command === 'remove') {
    // remove note
    console.log('Removing note!')
}

// print arguments
console.log(process.argv)
