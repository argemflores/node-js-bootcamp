// import modules and other files
const chalk = require('chalk')
const getNotes = require('./notes.js')

// print function results
console.log(getNotes())

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

console.log(chalk.green('Success!')) // green text
console.log(chalk.red('Error!')) // red text
console.log(chalk.yellow('Warning!')) // yellow text

console.log(chalk.inverse('Testing!')) // inverse colors
console.log(chalk.bold('Again!')) // bold text

console.log(chalk.blue('Hello', chalk.bold.bgGreen('world') + '!')); // mixed styles
