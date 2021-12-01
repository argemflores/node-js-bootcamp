## 20. Removing a Note

```js
// remove note
const removeNote = function(title) {
    // load all notes
    const notes = loadNotes()

    // update notes list
    const newNotes = notes.filter(function(note) {
        // preserve notes not matching the title to be removed
        return note.title !== title
    })

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
```
