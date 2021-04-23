// For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = function(values, condition) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenArray.push(values[i]);
    } else {
      oddArray.push(values[i]);
    }
  }
  if (condition === 'even') {
    return sumItUp(evenArray);
  } else if (condition === 'odd') {
    return sumItUp(oddArray);
  }
};

const sumItUp = function(inputArray) {
  let total = 0;
  for (let i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// console.log(summItUp([1, 2, 3, 4, 5]));

/* Expected Output:
6
9
144
0
*/
