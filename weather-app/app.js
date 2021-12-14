console.log('Starting')

// print after 2 seconds
setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

// print without waiting
// but will still execute later
setTimeout(() => {
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')
