function merge(arr1, arr2) {
  let finalArray = [];
  arr1.forEach(rating => finalArray.push(rating));
  arr2.forEach(rating => finalArray.push(rating));
  return finalArray.sort();
}

// Tests:
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
