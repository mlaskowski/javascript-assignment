/*
Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with 'message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

 Arguments

  messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

  Hint - try chaining some Array methods!

*/
var mes = [ {
    message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1' //50
  }, {
    message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa12' //51
  }, {
    message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' //49
} ];

function isLongEnough (element, index, array) {
 return (element.message.length < 50);
}

function getShortMessages(massages){
  var result = [];
  result = massages.filter(isLongEnough).map(function(message) {
   return message.message;
  });
  return result;
}

console.log(getShortMessages(mes));
