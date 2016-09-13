// Convert the following code from a for-loop to Array#map:
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.

function doubleAll(numbers) {
  var result = [];
  result = numbers.map(function(number){
    return number * 2;
  });
  return result;
}

console.log(doubleAll([1,2,3]));
