/* %20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
convert each URL encoded string to a javascript object */

const urlDecode = function(text) {
  urlWithSpaces = text.replace(/%20/g, ' ').split('&');
  let splitKeyAndValue = [];
  for (keyAndValue of urlWithSpaces) {
    splitKeyAndValue.push(keyAndValue.split('='));
  };
  let finalObj = {};
  splitKeyAndValue.forEach (subarray => { finalObj[subarray[0]] = subarray[1] });
  return finalObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/* Expected Outputs:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/
