# ezinput
![Node.js CI](https://github.com/shyok21/ezinput/actions/workflows/node.js.yml/badge.svg)

> Minimal and beginner-friendly CLI input utility for JavaScript.

![npm version](https://img.shields.io/npm/v/ezinput)
![npm downloads](https://img.shields.io/npm/dt/ezinput)
![License](https://img.shields.io/npm/l/ezinput)
---

## Installation

```bash
npm install ezinput
```

## Usage (v1.x - CP style batch input)
In `examples/sum.js`:

```js
const input = require('ezinput')(); // default: reads from stdin

const t = input.int();
for (let i = 0; i < t; i++) {
  const [a, b] = input.ints();
  console.log(`Sum of ${a} + ${b}:`, a + b);
}
```

## Examples
You can try out working examples inside the [examples/](./examples) folder.

### Run with pre-supplied input:
Runs the script with redirected input from a sample file.

```bash
npm run example
```

### Run with manual input:
Prompts user to type values directly into the terminal.
```bash
npm run example-cmd
>>> 3
>>> 5 10
>>> 15 20
>>> 25 30
```
and press Ctrl+D to end input.


## Supported Methods

```js
input.int()           // Single integer
input.float()         // Single float
input.ints()          // Space-separated numbers (ints or floats)
input.strings()       // Space-separated strings
input.line()          // Raw line
input.lines(n)        // Next n lines (string[])
input.numbers(n)      // n lines of number arrays (2D array)
```



## Upcoming Features

### v1.1.0 — Structured Inputs (JSON / Arrays / Objects)

- `input.json()` → Parses JSON string input  
- `input.array()` → Parses multiline `[1, 2, "apple"]`-style arrays  
- `input.object()` → Parses key-value `{ a: 1, b: 2 }` string into JS object  
- Optional: `input.fromEditor()` → Temporary input via in-editor (like `vim`)

### v1.2.0 — Interactive Live Mode (Readline)

- CP-style `stdin` is good, but for scripting we’ll support:
  ```js
  const input = require('ezinput').interactive();
  await input.ask('Enter number: ')
  ```

- Works like real-time `prompt()` or `readline.question()`.

### v1.3.0 — Hybrid Input Factory

- Smart factory: choose mode based on config flag:
  ```js
  const input = require('ezinput')({ mode: 'interactive' }); // or 'batch'
  ```
- No change to API. Internally switches between readline and fs.

## Tests

```bash
npm test
```

We use `jest` and `fs.readFileSync` mocks for testing stdin input.

## Dev Notes
- Singleton pattern (like `require('ezinput')()`) for consistent state  
- Reset via: `require('ezinput').reset(source)` to reinitialize input  
- Supports both file and stdin as input source

## Inspiration
Built to fix JavaScript’s awkward input handling during CP and scripts. This utility mimics the ease of:
- `cin >>` in C++
- `input()` in Python
- `Scanner.nextInt()` in Java

## License
MIT
