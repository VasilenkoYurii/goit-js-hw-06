const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  console.log(ingredient);
  const heading = document.createElement("li");
  heading.textContent = `${ingredient}`;
  list.append(heading);
}
