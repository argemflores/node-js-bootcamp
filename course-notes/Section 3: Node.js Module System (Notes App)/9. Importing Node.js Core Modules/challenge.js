//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opning the file and viewing the appended text

// import FileSystem module
const fs = require('fs')

// create a file and save its contents
fs.writeFileSync('notes.txt', 'My name is Argem!')

// append contents to the file
fs.appendFileSync('notes.txt', "\nI'm learning Node.js! Very exciting! :D")
