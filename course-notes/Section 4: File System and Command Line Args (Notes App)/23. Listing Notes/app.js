// import packages
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//
// Goal: Wire up list command
//
// 1. Create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // call add function
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // call remove function
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note!')
    }
})

// parse yargs arguments
yargs.parse()
