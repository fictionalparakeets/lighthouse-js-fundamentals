// if 'samples' array contains greater than 'threshold' percentage of dirty samples, return polluted

const checkAir = function (samples, threshold) {
  let dirtyWordCount = 0;
  const numOfDirty = samples.forEach(word => {
    if (word === 'dirty') {
      dirtyWordCount += 1;
    }
  });
  const samplesDirtyPercentage = dirtyWordCount / samples.length;
  if (samplesDirtyPercentage >= threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

// Tests:
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/* Expected Output:
Polluted
Polluted
Clean
*/
