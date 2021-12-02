## 21. ES6 Aside: Arrow Functions

- Arrow functions ↔ shorter syntax for functions (introduced in ES6)

```js
// regular function
const square = function (x) {
    return x * x
}
```

```js
// arrow function
const square = (x) => {
    return x * x
}
```

```js
// short-hand arrow function
const square = (x) => x * x
```

```js
// arrow functions don't bind their own this value
const event = {
    name: 'Birthday Party',
    guestList: ['Argem', 'Andrew', 'Jen', 'Mike'],
    // ES6 arrow function
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
```
