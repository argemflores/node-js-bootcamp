## 15. Getting Input from Users

- `process.argv` ↔ get a list of command-line arguments
    - Example
        - Command: `node app.js add --title="This is my title"`
        - Script: `console.log(process.argv)`
        - Output:
            ```
                [
                    '/usr/local/bin/node',
                    '/Users/argemflores/Workspace/node-js-bootcamp/notes-app/app.js',
                    'add',
                    '--title=This is my title'
                ]
            ```
