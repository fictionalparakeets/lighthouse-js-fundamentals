/* returns coordinates of spot [x, y] suitable for vehicle or false
input is array of arrays and string with vehicle type

    Regular cars can only park in R spots.
    Small cars can park in R or S spots.
    Motorcycles can park in R, S, or M spots.

In the array of parking spots, spots are written in both lower-case and upper-case. 
An upper-case letter means that the particular spot is AVAILABLE, 
while lower-case letters mean that the spot is UNAVAILABLE
*/

const spotOptions = function(vehicleType) {
  let possibleSpots = ['R']
  if (vehicleType === 'small') {
    possibleSpots.push('S');
  }
  if (vehicleType === 'motorcycle') {
    possibleSpots.push('S');
    possibleSpots.push('M');
  }
  return possibleSpots;
}

const whereCanIPark = function (spots, vehicle) {
  let suitableSpots = [];
  let willFit = spotOptions(vehicle);
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      let spotLetter = spots[y][x];
      if (willFit.includes(spotLetter)) {
        let xCoordinate = spots[y].indexOf(spotLetter);
        let yCoordinate = spots.indexOf(spots[y]);
        suitableSpots.push([xCoordinate, yCoordinate]);
      }
    }
  }
  if (suitableSpots[0]) {
    return suitableSpots[0];
  } else {
    return false;
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

/* Expected Output:
[4, 0]
false
[3, 1]
*/
