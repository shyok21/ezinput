const fs = require('fs');

/**
 * EzInput - A simple CLI input parser for JavaScript.
 * Supports line-by-line reading from stdin or custom file path.
 */
class EzInput {
  /**
   * @param {string|number} source - File path or 0 for stdin (default)
   */
  constructor(source = 0) {
    const raw = fs.readFileSync(source, 'utf-8');
    this.data = raw.trim().split('\n');
    this.index = 0;
  }

  /**
   * @private
   * Internal helper to fetch next line or throw error.
   * @returns {string}
   */
  _nextLine() {
    if (this.index >= this.data.length) {
      throw new Error(`No more input available at line ${this.index}`);
    }
    return this.data[this.index++];
  }

  /** @returns {string} Next full line */
  line() {
    return this._nextLine();
  }

  /** @returns {number} Single integer from next line */
  int() {
    const val = parseInt(this._nextLine(), 10);
    if (Number.isNaN(val)) {
      throw new Error(`Expected an integer but got invalid value at line ${this.index - 1}`);
    }
    return val;
  }

  /** @returns {number} Single float from next line */
  float() {
    const val = parseFloat(this._nextLine());
    if (Number.isNaN(val)) {
      throw new Error(`Expected a float but got invalid value at line ${this.index - 1}`);
    }
    return val;
  }

  /**
   * @returns {number[]} Integers parsed from space-separated line
   */
  ints() {
    const tokens = this._nextLine().trim().split(/\s+/);
    return tokens.map((s, i) => {
      const n = Number(s);
      if (Number.isNaN(n)) {
        throw new Error(`Expected number but got "${s}" at token ${i} on line ${this.index - 1}`);
      }
      return n;
    });
  }

  /**
   * @returns {string[]} Space-separated string tokens from next line
   */
  strings() {
    return this._nextLine().trim().split(/\s+/);
  }

  /**
   * @param {number} n - Number of lines to fetch
   * @returns {string[]} Raw lines
   */
  lines(n) {
    if (this.index + n > this.data.length) {
      throw new Error(`Requested ${n} lines but only ${this.data.length - this.index} available`);
    }
    return Array.from({ length: n }, () => this._nextLine());
  }

  /**
   * @param {number} n - Number of lines (rows)
   * @returns {number[][]} 2D array parsed from next n lines
   */
  numbers(n) {
    return this.lines(n).map((line, i) => {
      return line.trim().split(/\s+/).map((s, j) => {
        const n = Number(s);
        if (Number.isNaN(n)) {
          throw new Error(`Invalid number "${s}" at row ${i}, col ${j}`);
        }
        return n;
      });
    });
  }
}

let instance = null;

/**
 * Singleton accessor for EzInput.
 * @param {string|number} [source=0] - File path or 0 for stdin.
 * @returns {EzInput}
 */
function getInput(source = 0) {
  if (!instance) {
    instance = new EzInput(source);
  }
  return instance;
}

/**
 * Resets and replaces the singleton with a fresh EzInput instance.
 * Useful in tests or multi-input usage.
 * @param {string|number} [source=0]
 * @returns {EzInput}
 */
getInput.reset = (source = 0) => {
  instance = new EzInput(source);
  return instance;
};

module.exports = getInput;
