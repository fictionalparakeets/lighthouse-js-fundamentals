var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function() {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Julia closed the umbrella";
    } else {
      return "The umbrella is already closed!";
    }
  }
};

console.log(umbrella['isOpen']); // Bracket notation
umbrella.open();
console.log(umbrella.isOpen);  // Dot notation
umbrella.close();
console.log(umbrella.isOpen);
