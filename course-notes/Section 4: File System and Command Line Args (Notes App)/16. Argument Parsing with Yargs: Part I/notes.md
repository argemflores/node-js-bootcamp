## 16. Argument Parsing with Yargs: Part I

- `yargs` ↔ npm package for parsing arguments
- `npm i yargs@12.0.2` ↔ install yargs
- `node app.js --help` ↔ show help information about app.js
- `node app.js --version` ↔ show version of app.js
- `yargs.version('x.x.x')` ↔ customize yargs version of app.js
- `yargs.command({command: '', describe: '', handler: function() {}})` ↔ create a command using yargs
- `yargs.argv` ↔ see yargs arguments
