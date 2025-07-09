# ezinput

> Minimal and beginner-friendly CLI input utility for JavaScript.

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

Run:

```bash
node examples/sum.js < examples/input.txt
```

Or:

```bash
node examples/sum.js
# Type:
2
10 20
30 40
# Press:
Ctrl + D
```

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
