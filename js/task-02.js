const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();

for (let i = 0; i < ingredients.length; i++) {
  const ingredient = ingredients[i];
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  fragment.appendChild(listItem);
}

ingredientsList.appendChild(fragment);
