# TODO – ezinput Function Tracker
Track of all implemented and planned utility functions for CLI input handling.
## Core Input Functions
-  [ ] `int()` - Reads a single integer
-  [ ] `ints()` - Reads a space-separated line of integers
-  [ ] `float()` - Reads a single float
-  [ ] `line()` - Reads a full line (string)
-  [ ] `strings()` - Reads space-separated string tokens
-  [ ] `lines(n)` - Reads `n` lines (string[])
-  [ ] `numbers(n)` - Reads `n` lines of number arrays (e.g. matrix)
## Upcoming Additions
- [ ] `grid(n, m)` - Reads `n` lines of `m` space-separated numbers as 2D array
- [ ] `peekLine()` - Preview next line without consuming
- [ ] `hasNext()` - Check if input has more lines
- [ ] `inputFromArgs()` - Accept input from command-line arguments (`process.argv`)
- [ ] `fromFile(path)` - Load input from a file instead of stdin (for local dev)
## Aliases (Planned Shorthands)
- [ ] `i()` -> alias for `int()`
- [ ] `il()` -> alias for `ints()`
- [ ] `ls(n)` -> alias for `lines(n)`
- [ ] `f()` -> alias for `float()`
## Testing Goals
-  [ ] Unit test for `int()`
-  [ ] Unit test for `ints()`
-  [ ] Unit test for `strings()` and `line()`
-  [ ] Unit test for `float()` and `numbers()`
-  [ ] Mock stdin using `jest.mock('fs')`
-  [ ] Test for edge cases: empty line, invalid number
-  [ ] Test error handling for out-of-bounds input
## Advanced Input Parsers (Mixed Type Support)
- [ ] `input.json()` -> Parses next line as JSON (array, object, number, etc.)
- [ ] `input.object()` -> Shorthand for inputting object (same as `json()`)
- [ ] `input.array()` -> Parses a line like `[1, "apple", false, {"x":2}]` into actual JS array
### Use-cases:
- `input.array()` -> Accepts `[1, false, "apple", { "x": 1 }]`
- `input.object()` -> Accepts `{ "a": 1, "b": 2 }`
## Input Source Extensions
- [ ] `input.fromFile(path)` -> Read input from any file (for testing/debugging)
- [ ] `input.fromEditor()` -> Opens system editor (like `vim`, `nano`) for input
    - [ ] Auto closes when user exits editor
    - [ ] Parses temp file content as input source
    - [ ] Can support JSON block inputs
## Internal Quality
- [ ] Modular design (`class EzInput`)
- [ ] Linting setup (eslint/prettier)
- [ ] TypeScript conversion (optional branch)
- [ ] Add CI with GitHub Actions
- [ ] Add CONTRIBUTING.md
## Project Evolution
- [ ] Publish on npm as `ezinput`
- [ ] Setup badges in README (npm, test, license)
- [ ] Prepare minimal website/docs (e.g. ezinput.dev or jsdocs)

