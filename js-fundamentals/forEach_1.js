/* Write a forEach() function to loop over the `test` array and add 100 to each
of the values if the value is divisble by 3.

* Things to note:
*  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
*  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
*  - Outside the loop, you can use `console.log` to verify the `test` variable 
*/


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(arrNum, arrIndex, arr) {
  if (arrNum % 3 === 0) {
    arr[arrIndex] = arrNum + 100;
  }
});

console.log(test);
