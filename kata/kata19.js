/*
for queenThreat method:
same rank value = threat true
same file value = threat true
same rank + file = threat true
same rank - file = threat true
*/ 

const generateBoard = function(queenOne, queenTwo) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let boardLine = [];
    for (let y = 0; y < 8; y++) {
      let queenOneSpot = queenOne[0] === i && queenOne[1] === y;
      let queenTwoSpot = queenTwo[0] === i && queenTwo[1] === y;
      (queenOneSpot || queenTwoSpot) ? boardLine.push(1) : boardLine.push(0);
    }
    board.push(boardLine);
  }
  return board;
}

const queenThreat = function(generatedBoard) {
  let queenies = [];
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let y = 0; y < generatedBoard[i].length; y ++) {
      if (generatedBoard[i][y] === 1) {
        queenies.push([i, y]);
      }
    }
  }
  const threatCalculations = [
    queenies[0][0] === queenies[1][0],
    queenies[0][1] === queenies[1][1],
    7-queenies[0][0] + queenies[0][1] === 7-queenies[1][0] + queenies[1][1],
    7-queenies[0][0] - queenies[0][1] === 7-queenies[1][0] - queenies[1][1]
  ];
  return threatCalculations.includes(true);
}

// Inputs:
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/* Expected Output:
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/
