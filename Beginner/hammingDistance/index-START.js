/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

// my first pass
function hammingDistance(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    throw new Error("Strings do not have equal length");
  }
  distance = 0;
  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) distance++;
  }
  return distance;
}
// for loop
// the provided code does not run. Changed to run, assuming this is what's intended.
function hammingDistance(stringA, stringB) {
  let result = 0;

  if (stringA.length == stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
        result++;
      }
    }

    return result;
  } else {
    throw new Error("Strings do not have equal length");
  }
}
/* --- TEST RESULTS
first pass: fastest
for loop: 89.62% slower
This is likely because my first pass does not convert to equivalent case. (But that would be mutating the strings anyways, so wouldn't it invalidate the function as a test for hamming distance?)
After adding that, the provided for loop is 2.11% faster.
*/

module.exports = hammingDistance;
