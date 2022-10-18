/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/
capSentence(test);
// mine
function capSentence(text) {
  return text
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

//forEach
function capSentence(text) {
  let wordsArray = text.toLowerCase().split("");
  let capsArray = [];
  wordsArray.forEach((word) => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });
  return capsArray.join(" ");
}

// .map() and .slice()
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capsArray.join(" ");
}
// .map() and .replace()
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  return capsArray.join(" ");
}
/* --- TEST RESULTS
Mine: fastest, likely because I did not convert the entire string to lowercase.
forEach: 63% slower
.map() and .slice(): 3.93% slower
.map() and .replace(): 35% slower
*/

module.exports = capSentence;
