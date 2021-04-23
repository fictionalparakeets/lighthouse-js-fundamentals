// In this exercise, we will be given an array of 2 or more numbers. 
//We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function(data) {
  let sorted = false;
  let placeholder;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > data[i + 1]) {
        sorted = false;
        placeholder = data[i + 1];
        data[i + 1] = data[i];
        data[i] = placeholder;
      }
    }
  }
  return data[data.length -1] + data[data.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

/* Expected Output:
11
5
126
*/