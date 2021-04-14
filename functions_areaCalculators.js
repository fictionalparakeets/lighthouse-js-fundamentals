const notNegative = function(paramOne, paramTwo = 0) {
  if (paramOne < 0 || paramTwo < 0) {
    return false;
  } else {
    return true;
  }
}

const calculateRectangleArea = function(length, width) {
  if (!notNegative(length, width)) {
    return undefined;
  } else {
    return length * width;
  }
};


const calculateTriangleArea = function(base, height) {
  if (!notNegative(base, height)) {
    return undefined;
  } else {
    return base * height / 2;
  }
};

const calculateCircleArea = function(radius) {
  if (!notNegative(radius)) {
    return undefined;
  } else {
    return Math.PI * radius * radius
  }
};

// Tests:
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
