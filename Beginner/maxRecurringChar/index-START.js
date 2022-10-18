/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringCharMine(text) {
  const letterCounts = {};
  let max = 0;
  let maxChar = "";
  for (letter of text) {
    letterCounts[letter]
      ? (letterCounts[letter] = letterCounts[letter] + 1)
      : (letterCounts[letter] = 1);
    if (letterCounts[letter] > max) {
      max = letterCounts[letter];
      maxChar = letter;
    }
  }
  return letter;
}
function maxRecurringCharObj(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";
  for (let char of text) {
    charMap.hasOwnProperty(char) ? charMap[char]++ : (charMap[char] = 1);
  }
  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
function maxRecurringChar(text) {
  let charMap = {};
  let charArray = [];
  let valuesArray = [];
  let maxCharValue = 0;
  for (let char of text) {
    charMap.hasOwnProperty(char) ? charMap[char]++ : (charMap[char] = 1);
  }
  charArr = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  maxCharValue = Math.max(...valuesArray);
  return charArray[valuesArray.indexOf(maxCharValue)];
}

module.exports = maxRecurringChar;
