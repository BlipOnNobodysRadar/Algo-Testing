/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
  let count = 0;
  let vowels = "aeiou".split("");
  for (letter of text) {
    if (vowels.includes(letter.toLowerCase())) count++;
  }
  return count;
}
function vowelsCounter(text) {
  let matchingInstances = text.match(/[aeiou]/gi);
  return matchingInstances ? matchingInstances.length : 0;
}

module.exports = vowelsCounter;
