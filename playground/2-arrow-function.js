// regular function
// const square = function (x) {
//     return x * x
// }

// console.log(square(3))

// arrow function
// const square = (x) => {
//     return x * x
// }

// console.log(square(3))

// short-hand arrow function
// const square = (x) => x * x

// console.log(square(2))

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

// test function
event.printGuestList()
