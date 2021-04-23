/*
For this challenge, we'll need to implement a function called judgeVegetable()
that will decide which vegetable is best based on a given judging characteristic. 
Our function will receive two parameters: a list of veggies(as an array of objects), 
and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) 
the vegetable with the highest ranking in the provided category.
*/

const judgeVegetable = function(vegetables, metric) {
  let tempObject = vegetables[0];
  vegetables.forEach(item => {
    if (item[metric] > tempObject[metric]) {
      tempObject = item;
    }
  });
  return tempObject.submitter;
};

// Tests:
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 2,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 10,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
//judgeVegetable(vegetables, metric)
console.log(judgeVegetable(vegetables, metric));

/* The judgeVegetable function would return the string:
'Sally Tomato-Grower' */
