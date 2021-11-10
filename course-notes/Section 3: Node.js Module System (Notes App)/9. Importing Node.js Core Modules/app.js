// import FileSystem module
const fs = require('fs')

// create a file and add contents to it
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// overwrite contents in the file
fs.writeFileSync('notes.txt', 'My name is Argem!')
