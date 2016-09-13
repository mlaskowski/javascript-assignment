/*
Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Tip: you can use array#some and Array#every or _.includes
*/
var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

var testAllValid = function checkUsersValid(arrayToCheck) {
  var arrayOfState = arrayToCheck.map(checkId);
  return arrayOfState.every(isAllTrue);
};

function checkId(id) {
  var resoult = goodUsers.some(function (element) {
    return (element.id == id.id);
  });
	return resoult;
};

function isAllTrue(element) {
  return (element === true);
}

console.log(testAllValid([
  { id: 2 },
  { id: 1 }
]));

console.log(testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
]));
