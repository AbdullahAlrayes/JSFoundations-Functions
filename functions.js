/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 !== 0) {
    return true;
  } else return false;
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let list = [];
  for (let step = 0; step < n; step++) {
    const result = isOdd(step);
    if (result) {
      list.push(step);
    }
  }
  console.log(list);
  return list;
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd(n)) {
    console.log(n * n);
    return n * n;
  } else {
    console.log(n * 2);
    return n * 2;
  }
}

greet('Abdullah');
isOdd(3);
oddsSmallerThan(10);
squareOrDouble(9);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
