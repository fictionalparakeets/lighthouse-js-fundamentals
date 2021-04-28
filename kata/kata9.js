// Convert a normal string of words into camelCase

const camelCase = function(input) {
  let stringArray = input.split(' ');
  let camelCaseString = [];
  camelCaseString.push(stringArray[0]);
  for (let i = 1; i < stringArray.length; i++) {
    camelCaseString.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));
  }
  return camelCaseString.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* Expected Output:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/
