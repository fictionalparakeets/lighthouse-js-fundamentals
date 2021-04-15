/*
Define a function called range

    The function takes 3 integer parameters: start, end, and step.
    The function should return an array of numbers from start to end counting by step.

The function should return an empty array [] if given incorrect parameters, such as:

    start, end, or step being undefined
    start being greater than end
    step being 0, or negative
*/

function validEntries(num1, num2, num3) {
  if (num1 > num2) {
    return false;
  } else if (num3 <= 0) {
    return false;
  } else {
    return true;
  }
}

function range(start, end, step) {
  let createdArray = [];
  if (validEntries(start, end, step)){
    let i = start;
    while (i <= end) {
      createdArray.push(i);
      i += step;
    }
  }
  return createdArray;
}

// Tests:
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range());
console.log(range(2, 4, -1));
