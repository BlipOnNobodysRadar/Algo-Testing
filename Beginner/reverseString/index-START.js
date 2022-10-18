/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
  return text.split("").reverse().join("");
}
function reverseString(text) {
  return [...text].reverse().join("");
}
function reverseString() {
  let str = "";
  for (let i = text.length - 1; i > 0; i--) {
    str += text[i];
  }
  return str;
}
function reverseString() {
  let result = "";
  for (let char of text) {
    // putting char before result is what reverses the string
    result = char + result;
  }
}
function reverseString(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.substr(1) + text[0]);
  }
}
function reverseString(text) {
  return text.split("").reduce((acc, char) => char + acc, "");
}

module.exports = reverseString;
