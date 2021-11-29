// import file system
const fs = require('fs')

// create a book object
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// convert object into a JSON string
const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// convert JSON into an object
const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// write JSON string to a file
// fs.writeFileSync('1-json.json', bookJSON)

// read JSON file to buffer
const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// console.log(dataBuffer.toString())

// convert buffer data to string
const dataJSON = dataBuffer.toString()

// parse JSON data from string
const data = JSON.parse(dataJSON)

// console.log(data.title)

//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

// read file, convert to string, then parse contents
const jsonData = JSON.parse(fs.readFileSync('1-json.json', 'utf8').toString())

// replace data
jsonData.name = 'Argem'
jsonData.age = 30

// replace file contents with the new data
fs.writeFileSync('1-json.json', JSON.stringify(jsonData))

// read updated file, then convert to string
const newJsonDataString = fs.readFileSync('1-json.json', 'utf8').toString()

// print new file contents
console.log(newJsonDataString)
