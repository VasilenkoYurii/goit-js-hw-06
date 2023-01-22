const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector("#ingredients");

const ingredientsMaker = (ingredientsArray) => {
  return ingredientsArray.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;

    return liEl;
  });
};

const elements = ingredientsMaker(ingredients);
// console.log(elements);
ingredientsContainer.append(...elements);
// console.log(ingredientsContainer);
