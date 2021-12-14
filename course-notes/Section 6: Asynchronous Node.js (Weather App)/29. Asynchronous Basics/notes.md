## 29. Asynchronous Basics

- Asynchronous non-blocking ↔ app can continue to do other things while waiting for long-running I/O process to complete
- `setTimeout(() => {}, time_in_ms)` ↔ wait for time in ms before running function
    - Setting time to 0 will still execute the next command before the function
