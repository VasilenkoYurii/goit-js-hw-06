const menuCategories = document.querySelector("#categories");
// console.log(menuCategories);

//Task1
const menuItems = menuCategories.querySelectorAll(".item");
console.log(`Number of categories: ${menuItems.length}`);

for (const menuItem of menuItems) {
  const message = menuItem.firstElementChild.textContent;
  const lengthCategoryOne = menuItem.children;
  console.log(`Category: ${message}`);
  console.log(`Elements: ${lengthCategoryOne[1].children.length}`);
}
