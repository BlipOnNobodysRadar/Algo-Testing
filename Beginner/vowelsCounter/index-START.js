/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter1(text) {
  let count = 0;
  let vowels = "aeiou".split("");
  for (letter of text) {
    if (vowels.includes(letter.toLowerCase())) count++;
  }
  return count;
}
function vowelsCounter2(text) {
  let matchingInstances = text.match(/[aeiou]/gi);
  return matchingInstances ? matchingInstances.length : 0;
}

/* ---- TEST RESULTS
vowelsCounter1: 362110 ops/s (83.9%) slower
vowelsCounter2: 2249746 ops/s (fastest) 

*/
module.exports = vowelsCounter;
