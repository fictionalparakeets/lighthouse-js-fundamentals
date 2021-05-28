/* Create a function named blocksAway that will receive an array of directions,
and return an object that calculates how far north and east those directions will take someone. 
The taxi driver will always start at the same position, in the most south west position on the grid.
This means that the output will only need to specify an east and north position,
since the taxi driver can only end up in these East and North of the starting point. */

const blocksAway = function(directions) {
  let workingObj = { north: 0, east: 0, south: 0, west: 0 };
  const directionSelection = Object.keys(workingObj);
  let currentDirection = 0;
  directions.forEach((wordOrNum, index) => {
    if (wordOrNum === 'left') {
      index === 0 ? currentDirection = 0 : currentDirection === 0 ? currentDirection = 3 : currentDirection -= 1;
      workingObj[directionSelection[currentDirection]] += directions[index + 1];
    }
    if (wordOrNum === 'right') {
      currentDirection === 3 ? currentDirection = 0 : currentDirection += 1;
      workingObj[directionSelection[currentDirection]] += directions[index + 1];
    }
  });
  return gimmeJustEastNorth(workingObj);
};

const gimmeJustEastNorth = function(workingObjInput) {
  let finalObj = { east: 0, north: 0 };
  Object.entries(workingObjInput).forEach(keyAndValue => {
    let [ keyVariable, valueVariable ] = keyAndValue;
    switch (keyVariable) {
      case 'north': finalObj.north += valueVariable;
        break;
      case 'east': finalObj.east += valueVariable;
        break;
      case 'south': finalObj.north -= valueVariable;
        break;
      case 'west': finalObj.east -= valueVariable;
        break;
    }
  });
  return finalObj;
}

// Inputs: 
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/* Expected Outputs:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/
