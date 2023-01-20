const menuCategories = document.querySelector("#categories");
// console.log(menuCategories);

//Task1
const menuItems = menuCategories.querySelectorAll(".item");
console.log(`Number of categories: ${menuItems.length}`);

const messageOne = menuItems[0].firstElementChild;
console.log(`Category: ${messageOne.textContent}`);

const lengthCategoryOne = menuItems[0].children;
console.log(`Elements: ${lengthCategoryOne[1].children.length}`);

//Task2

const messageTwo = menuItems[1].firstElementChild;
console.log(`Category: ${messageTwo.textContent}`);

const lengthCategoryTwo = menuItems[1].children;
console.log(`Elements: ${lengthCategoryTwo[1].children.length}`);

//Task3

const messageThree = menuItems[2].firstElementChild;
console.log(`Category: ${messageThree.textContent}`);

const lengthCategoryThree = menuItems[2].children;
console.log(`Elements: ${lengthCategoryThree[1].children.length}`);
