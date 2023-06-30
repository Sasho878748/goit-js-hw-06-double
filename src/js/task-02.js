const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById("ingredients");



ingredients.forEach((e)=>{
  const liLst = document.createElement("li");
  liLst.classList.add("item");
  liLst.textContent = e;
  ulList.appendChild(liLst);
})


