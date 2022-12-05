//display recipes
function displayRecipe(inputArray) {
    const cardsSection = document.querySelector('.cards');
    cardsSection.innerHTML = "";
        inputArray.forEach((recipe) => {
            const recipeModel = recipesFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            cardsSection.appendChild(recipeCardDOM);
        });
}
displayRecipe(recipes);
//fin de display recipes