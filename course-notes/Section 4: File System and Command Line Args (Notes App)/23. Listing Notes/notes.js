// import packages
const fs = require('fs')
const chalk = require('chalk')

// const getNotes = () => 'Your notes...'
const getNotes = () => {
    return 'Your notes...'
}

// add a new note
const addNote = (title, body) => {
    // load all notes
    const notes = loadNotes()
    
    // find note with the same title
    const duplicateNote = notes.find((note) => note.title === title)
    
    // duplicate not found
    if (!duplicateNote) {
        // add to notes list
        notes.push({
            title: title,
            body: body
        })
        
        // save new notes list
        saveNotes(notes)
        
        console.log(chalk.green.inverse('New note added!'))
    }
    else {
        // duplicate found
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// save a note
const saveNotes = (notes) => {
    // stringify JS object to JSON
    const dataJSON = JSON.stringify(notes)
    
    // save file (overwrite if existing)
    fs.writeFileSync('notes.json', dataJSON, 'utf8')
}

// remove note
const removeNote = (title) => {
    // load all notes
    const notes = loadNotes()
    
    // update notes list
    // preserve notes not matching the title to be removed
    const newNotes = notes.filter((note) => note.title !== title)
    
    // note removed (updated list less than the original list)
    if (newNotes.length < notes.length) {
        // save updated notes list
        saveNotes(newNotes)
        
        console.log(chalk.green.inverse('Note removed!'))
    }
    else {
        // note not found
        console.log(chalk.red.inverse('No note found!'))
    }
}

// load all notes
const loadNotes = () => {
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

// list all notes
const listNotes = () => {
    // load all notes
    const notes = loadNotes()
    
    // print header
    console.log(chalk.inverse('Your notes...'))
    
    // print title of each note
    notes.forEach((note) => {
        console.log(note.title)
    })
}

// export notes functions
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
