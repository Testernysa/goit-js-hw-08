
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const createIngredientsList = (ingredients) => {
  const fragment = document.createDocumentFragment();

  ingredients.forEach(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    fragment.appendChild(listItem);
  });

  ingredientsList.appendChild(fragment);
};

createIngredientsList(ingredients);
