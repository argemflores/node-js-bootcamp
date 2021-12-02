// import packages
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//
// Goal: Wire up read command
//
// 1. Set up --title option for read command
// 2. Create readNote in notes.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple of commands

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
        // call list function
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // call read function
        notes.readNote(argv.title)
    }
})

// parse yargs arguments
yargs.parse()
