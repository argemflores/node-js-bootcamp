// import modules and other files
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//
// Challenge: Wire up removeNote
//
// 1. Load existing notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist

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
    handler: function(argv) {
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
    handler: function(argv) {
        // call remove function
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing notes!')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

// parse yargs arguments
yargs.parse()
