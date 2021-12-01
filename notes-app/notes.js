// import file system
const fs = require('fs')

const getNotes = function() {
    return 'Your notes...'
}

// add a new note
const addNote = function(title, body) {
    // load all notes
    const notes = loadNotes()
    
    // find duplicates via title
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    
    // check before adding new note
    if (duplicateNotes.length === 0) {
        // duplicates not found
        
        // add to notes list
        notes.push({
            title: title,
            body: body
        })
        
        // save new notes list
        saveNotes(notes)
        
        console.log('New note added!')
    }
    else {
        // duplicates found
        console.log('Note title taken!')
    }
}

// save a note
const saveNotes = function(notes) {
    // stringify JS object to JSON
    const dataJSON = JSON.stringify(notes)
    
    // save file (overwrite if existing)
    fs.writeFileSync('notes.json', dataJSON, 'utf8')
}

// remove note
const removeNote = function(title) {
    console.log(title)
}

const loadNotes = function() {
    // read notes.json file
    try {
        // notes.json found
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        
        // parse contents
        return JSON.parse(dataJSON)
    } catch (e) {
        // notes.json not found
        return []
    }
}

// export notes functions
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
