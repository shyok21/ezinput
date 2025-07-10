const input = require('../src/ezinput')();

const t = input.int();
for (let i = 0; i < t; i++) {
  const [a, b] = input.ints();
  console.log(`Sum of ${a} + ${b}:`, a + b);
}
