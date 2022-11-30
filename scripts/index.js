let ingredientList = [];
let applianceList = [];
let ustensilList = [];

const cardContainer = document.getElementById('card_container');

async function displayData(recipes) {
    const recipesCard = [...recipes]
    for (let recipe of recipesCard) {
        for (ingredient of recipe.ingredients) {
            ingredientList.push(ingredient.ingredient);
        }

        applianceList.push(recipe.appliance);
        ustensilList.push(...recipe.ustensils);

        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        cardContainer.appendChild(recipeCardDOM);
    }
}

function init() {
    displayData(recipes);
}

init();