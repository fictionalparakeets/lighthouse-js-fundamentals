// we will be given a normal string of words and turn it into a 
// percent-encoded string by replacing all whitespace with %20

const urlEncode = function(text) {
  let textArray = text.trim().split('');
  let parsedArray = [];
  textArray.forEach(char => {
    if (char == " ") {
      parsedArray.push('%20');
    } else {
      parsedArray.push(char);
    }
  });
  return parsedArray.join('');
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/* Expected Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/
