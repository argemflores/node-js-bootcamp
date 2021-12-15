## 30. Call Stack, Callback Queue, and Event Loop

- Call Stack ↔ data structure that tracks the execution of the program by keeping track of all running functions (first in-last out or last in-first out)
    - main() function is added to the call stack first
    - more functions get pushed to the call stack
    - completed functions get popped from the call stack
- Node APIs ↔ register callback pair events, where the event is to wait 2 seconds (wait for a database request to complete) and the callback is the function to run (do something with the data)
- Callback Queue ↔ maintain a list of callback functions ready to get executed
- Event Loop ↔ checks call stack and callback queue; if call stack is empty, run item from callback queue
