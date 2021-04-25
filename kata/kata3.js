// count number of vowels (a, e, i, o, u)

const vowels = ['a', 'e', 'i', 'o', 'u'];

const numberOfVowels = function(data) {
  let count = 0;
  let letterArray = data.split("");
  letterArray.forEach(letter => {
    if (vowels.includes(letter)) {
      count += 1;
    }
  });
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/* Expected Output:
3
5
5
*/
