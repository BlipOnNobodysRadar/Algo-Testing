/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// first pass
function mergeArrays(...arrays) {
  const set = new Set();
  arrays.forEach((array) => {
    for (let i = 0; i < array.length; i++) {
      set.add(array[i]);
    }
  });
  return new Array(set);
}
// using Sets
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  return [...new Set([...jointArray])];
}

// using .filter()
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
}

// using .reduce()
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  const uniqueArray = jointArray.reduce((newArray, item) => {
    if (newArray.includes(item)) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  }, []);
  return uniqueArray;
}

// test on mergeArrays([1,2,3,3,3], [1,4,5,2], [1,4,5,6,7,1,3,453,5412,14,24,16,75],[23,5,31,46,63,12,123,1,2,4,79,6])
/* --- TEST RESULTS
first pass: fastest. Go me.
Sets: 36.64% slower (I believe the way they merge arrays is unnecessarily inefficient)
filter: 21.95% slower
.reduce(): 61.81% slower
*/

module.exports = mergeArrays;
