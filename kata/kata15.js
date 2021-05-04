// given a list of instructors. create a single object to organize them based on their course

const organizeInstructors = function(instructors) {
  let finalObject = {};
  instructors.forEach(obj => {
    if (obj.course in finalObject) {
      finalObject[obj.course].push(obj.name);
    } else {
      finalObject[obj.course] = [obj.name];
    }    
  });
  return finalObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/* Expected Output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/
