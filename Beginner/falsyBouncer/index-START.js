/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// first pass (for loop)
function falsyBouncer(array) {
  const result = [];
  for (let val of array) {
    if (val) result.push(val);
  }
  return result;
}
// filter
function falsyBouncer(array) {
  return array.filter((value) => value);
}

// test falsyBouncer([1, 0, null, '', 5])
/* --- TEST RESULTS
for loop: fastest
filter: fastest
Both equally fast within their margin of error on jsbench.me.

Retest has .filter() at 3.38% slower than the for loop.

 */

module.exports = falsyBouncer;
