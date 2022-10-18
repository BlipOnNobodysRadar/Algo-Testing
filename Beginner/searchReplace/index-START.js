// No code was provided in the searchPlace directory.

/*
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g 
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
Note: Make sure to match the casing(capitalization) of the string to be replaced as shown above.
*/

//using replace()
function searchReplace(str, word, newWord) {
  // matches capitalization
  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }
  return str.replace(word, newWord);
}

//using regex
function searchReplace(str, word, newWord) {
  let regex = new RegExp(word, "gi");
  // matches capitalization
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }
  return str.replace(regex, newWord);
}

// searchReplace(sentence, word, newWord)
// sentence = "He is Sleeping on the couch"
// word = "Sleeping"
// newWord = "sitting"

/* --- TEST RESULTS
string: fastest
regex: 51.15% slower
*/
