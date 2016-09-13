/*
Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

Example
*/
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function count(wordsCount, currentWord){
  if(typeof wordsCount[currentWord] === "undefined"){
    wordsCount[currentWord] = 1;
    return wordsCount;
  }else{
    wordsCount[currentWord]++;
    return wordsCount;
  }
};

function countWords(inputWords) {
  return inputWords.reduce(count, {});
}

console.log(countWords(inputWords));
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
