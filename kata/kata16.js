const vowelArray = ['a', 'e', 'i', 'o', 'u'];

const makeCase = function(input, possibleCases) {
  let parameter;
  typeof possibleCases === 'string' ? parameter = [possibleCases] : parameter = orderCases(possibleCases);
  let outputString;
  for (param of parameter) {
    if (outputString === undefined) outputString = input;
    switch (param) {
      case 'camel':
        outputString = camelCase(outputString.split(' '));
        break;
      case 'pascal':
        outputString = pascalCase(outputString.split(' '));
        break;
      case 'snake':
        outputString = outputString.split(' ').join('_');
        break;
      case 'kebab':
        outputString = outputString.split(' ').join('-');
        break;
      case 'title':
        outputString = titleCase(outputString.split(' '));
        break;
      case 'vowel':
        outputString = vowelCase(outputString.split(''));
        break;
      case 'consonant':
        outputString = consonantCase(outputString.split(''));
        break;
      case 'upper':
        outputString = upperCase(outputString);
        break;
      case 'lower':
        outputString = lowerCase(outputString);
        break;
    }
  }
  console.log('__________________________________');
  console.log(parameter);
  return outputString;
}

const orderCases = function(input) {
  const precedence = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  let orderedCases = [];
  for (caseName of precedence) {
    if (input.includes(caseName)) orderedCases.push(caseName);
  }
  return orderedCases;
}

const camelCase = function(input) {
  let camelCased = [];
  camelCased.push(input[0].toLowerCase());
  for (let i = 1; i < input.length; i++) {
    camelCased.push(input[i][0].toUpperCase() + input[i].slice(1).toLowerCase());
  }
  return camelCased.join('');
};

const pascalCase = function(input) {
  let pascalCased = [];
  for (word of input) {
    pascalCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return pascalCased.join('');
}

const titleCase = function(input) {
  let titleCased = [];
  for (word of input) {
    titleCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return titleCased.join(' ');
}

const vowelCase = function(input) {
  let vowelCased = [];
  for (letter of input) {
    vowelArray.includes(letter) ? vowelCased.push(letter.toUpperCase()) : vowelCased.push(letter.toLowerCase());
  }
  return vowelCased.join('');
}

const consonantCase = function(input) {
  let consonantCased = [];
  for (letter of input) {
    vowelArray.includes(letter) ? consonantCased.push(letter.toLowerCase()) : consonantCased.push(letter.toUpperCase());
  }
  return consonantCased.join('');
}

const upperCase = function(input) {
  let upperCased = '';
  for (letter of input) {
    upperCased += letter.toUpperCase();
  }
  return upperCased;
}

const lowerCase = function(input) {
  let lowerCased = '';
  for (letter of input) {
    lowerCased += letter.toLowerCase();
  }
  return lowerCased;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/* Expected Outputs:
thisIsAString  -camel
ThisIsAString  -pascal
this_is_a_string  -snake
this-is-a-string  -kebab
This Is A String  -title
thIs Is A strIng  -vowel
THiS iS a STRiNG  -consonant
THIS_IS_A_STRING  -upper, then snake
*/
