## 17. Argument Parsing with Yargs: Part II

```js
yargs.command({
    command: 'name',
    describe: 'Description',
    builder: {
    	option1: {
    		describe: 'Description',
    		demandOption: true, // required
    		type: 'string' // data type
    	}
    }
    handler: function(argv) {
        // handler
        console.log(argv.option1)
    }
})
```
