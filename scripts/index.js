//display recipes
function displayRecipe(recipes) {
    const cardsSection = document.querySelector('.cards');

        recipes.forEach((recipe) => {
            const recipeModel = recipesFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            cardsSection.appendChild(recipeCardDOM);
        });
}
displayRecipe(recipes);
//fin de display recipes