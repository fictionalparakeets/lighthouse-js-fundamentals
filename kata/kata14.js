// calculate changeOwing
// loop through the highest value in denominations, adding the key value pair to changeBreakdown
// stop adding when value goes above changeOwing
// move on to the next highest value in denominations
// end looping when changeOwing is 0
// return changeBreakdown

const denominations = {
  twentyDollar: 2000,
  tenDollar: 1000,
  fiveDollar: 500,
  twoDollar: 200,
  oneDollar: 100,
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1
};

const calculateChange = function(total, cash) {
  let changeOwing = cash - total;
  let changeBreakdown = {};
  Object.entries(denominations).forEach(keyValuePair => {
    let multiplier = addChange(keyValuePair[1], changeOwing);
    if (multiplier > 0) {
      changeOwing -= multiplier * keyValuePair[1];
      changeBreakdown[keyValuePair[0]] = multiplier;
    }
  });
  return changeBreakdown;
};

const addChange = function(denominationValue, changeOwing) {
  let changeOwingFixed = changeOwing;
  let multiplierNum = 0;
  while (denominationValue * multiplierNum <= changeOwingFixed - denominationValue) {
    changeOwing -= denominationValue;
    multiplierNum += 1;
  }
  return multiplierNum;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/
