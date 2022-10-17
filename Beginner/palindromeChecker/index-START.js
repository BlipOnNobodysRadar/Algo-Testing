/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// mine (I think for loop would be faster)
// turns out this is exactly what's used in the intuitive approach as well
function palindromeChecker(text) {
  return text.toLowerCase().split("").reverse().join("") === text.toLowerCase();
}
// loop
function palindromeChecker(text) {
  let charArray = text.toLowerCase().split("");
  let result = charArray.every((letter, index) => {
    return letter === charArray[charArray.length - index - 1];
  });
  return result;
}
// optimized loop
function palindromeChecker(text) {
  let textLen = text.length;
  for (var i = 0; i < textLen / 2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
      return false;
    }
    return true;
  }
}

module.exports = palindromeChecker;
