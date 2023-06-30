const form = document.querySelector("#categories");
const categoriesNumber = form.children.length;
console.log(`Number of categories: ${categoriesNumber}`);
// -----------------------------------------------------------
const categoriesList = form.querySelectorAll("li.item");

categoriesList.forEach((event) => {
  const nameItem = event.querySelector("h2").textContent;
  const categoriesItemCount = event.querySelectorAll("li").length;
  console.log(`Category: ${nameItem}`);
  console.log(`Elements: ${categoriesItemCount}`);
});
