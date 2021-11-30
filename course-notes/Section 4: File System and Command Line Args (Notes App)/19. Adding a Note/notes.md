## 19. Adding a Note

```js
// save a note
const saveNotes = function(notes) {
    // stringify JS object to JSON
    const dataJSON = JSON.stringify(notes)

    // save file (overwrite if existing)
    fs.writeFileSync('notes.json', dataJSON, 'utf8')
}
```

```js
// export notes functions
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
```

```js
// import notes functions
const notes = require('./notes.js')
```
