// input is an array of arrays. first value in each inner array is the value to repeat
// second value is the number of times to repeat it.

const repeatNumbers = function(data) {
  let outputString = '';
  for (let i = 0; i < data.length; i++) {
    let repeater = data[i][0];
    for (let y = 0; y < data[i][1]; y++) {

      outputString += repeater;
    }
    outputString += ', ';
  }
  return outputString;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/* Expected Output:
1111111111
11, 222
10101010, 343434343434, 9292
*/
