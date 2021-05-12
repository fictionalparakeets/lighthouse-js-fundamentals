const squareCode = function(message) {
  const spacelessMessage = message.replace(/ /g, '');
  const lineNumber = Math.ceil(Math.sqrt(spacelessMessage.length));
  let scrambled = '';
  for (let i = 0; i < lineNumber; i++) {
    for (let y = i; y < spacelessMessage.length; y += lineNumber) {
      scrambled += spacelessMessage[y];
    }
    scrambled += ' ';
  }
  return scrambled;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/* Expected Outputs:
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/
