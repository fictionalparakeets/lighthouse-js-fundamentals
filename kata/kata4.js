// given list of instructors and have to determine which has the longest name

const instructorWithLongestName = function(instructors) {
  let longestNameObject = instructors[0];
  instructors.forEach(innerObject => {
    if (innerObject.name.length > longestNameObject.name.length) {
      longestNameObject = innerObject;
    }
  });
  return longestNameObject;
};

console.log(instructorWithLongestName([
  {name: "Ophilia", course: "Web"},
  {name: "Jeremiah", course: "Web"},
  {name: "Samuel", course: "iOS"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
  {name: "Matthew", course: "Web"}
]));

/* Expected Output:
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/