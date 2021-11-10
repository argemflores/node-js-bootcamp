const fs = require('fs')

// create a file and add contents to it
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// overwrite contents in the file
fs.writeFileSync('notes.txt', 'My name is Argem!')

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opning the file and viewing the appended text

// append contents to the file
fs.appendFileSync('notes.txt', "\nI'm learning Node.js! Very exciting! :D")
