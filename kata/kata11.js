const PI = 3.14159;

const sphereVolume = function(radius) {
  let volume = (4/3) * PI * Math.pow(radius, 3);
  return volume;
};

const coneVolume = function(radius, height) {
  let volume = (PI * (radius * radius) * height) / 3;
  return volume;
};

const prismVolume = function(height, width, depth) {
  let volume = height * width * depth;
  return volume;
};

const totalVolume = function(arrayOfShapes) {
  let volume = 0;
  arrayOfShapes.forEach(shape => {
    if (shape.type === 'sphere') {
      volume += sphereVolume(shape.radius);
    } else if (shape.type === 'cone') {
      volume += coneVolume(shape.radius, shape.height);
    } else if (shape.type === 'prism') {
      volume += prismVolume(shape.height, shape.width, shape.depth);
    }
  });
  return Math.round(volume);
};

// Tests: (should all return 'true')
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(totalVolume(duck));
