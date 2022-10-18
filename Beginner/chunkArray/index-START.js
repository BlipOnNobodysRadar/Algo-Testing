/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// first pass
function chunkArray(array, size) {
  let giga = [];
  let smol = [];
  let sizeIterator = 0;
  for (let i = 0; i < array.length; i++) {
    smol.push(array[i]);
    if (i === array.length - 1) {
      giga.push(smol);
      break;
    }
    if (sizeIterator === size - 1) {
      giga.push(smol);
      smol = [];
      sizeIterator = 0;
    } else {
      sizeIterator++;
    }
  }
  return giga;
}
// looping
function chunkArray(array, size) {
  let result = [];
  for (value of array) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length === size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}

// splice
function chunkArray(array, size) {
  let result = [];
  let arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }
  return result;
}

//slice
function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

// recursion
function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}
// test is chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)

/* --- TEST RESULTS
first pass: 3.75% slower
looping: 81.96% slower
splice: 75.37% slower
slice: fastest
recursion: 54.76% slower
*/

module.exports = chunkArray;
