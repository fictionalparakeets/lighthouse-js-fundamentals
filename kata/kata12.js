// arrayA is an array of ingredients in stock at bakery A. arrayB is the same for bakery B.
// recipeObjects is array of objects, each with a name property (string) and ingredient property (array)
// only searching for two ingredient recipes. One ingredient from each bakery.
// return the name of the correct recipe. There will always be a single correct answer. Don't worry about edge cases.

const chooseRecipe = function(arrayA, arrayB, recipeObjects) {
  let theChosenOne = '';
  let bakeryAPossibles = ingredientCheck(arrayA, recipeObjects);
  let bakeryBPossibles = ingredientCheck(arrayB, recipeObjects);
  bakeryAPossibles.forEach(possibleRecipe => {
    if (bakeryBPossibles.includes(possibleRecipe)) {
      theChosenOne = possibleRecipe;
    }
  })
  return theChosenOne;
};

const ingredientCheck = function(bakery, recipes) {
  let possibleRecipes = [];
  recipes.forEach(recipe => {
    for (let i = 0; i < bakery.length; i++) {
      let bakeryIngredientIterator = bakery[i];
      if (recipe.ingredients.includes(bakeryIngredientIterator)) {
        possibleRecipes.push(recipe.name);
      }
    }
  });
  return possibleRecipes;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes))

/* Expected Output:
Persian Cheesecake
Nima's Famous Dijon Raisins
*/
