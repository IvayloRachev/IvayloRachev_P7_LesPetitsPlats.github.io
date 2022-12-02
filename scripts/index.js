//display recipes
function displayRecipe(inputArray) {
    const cardsSection = document.querySelector('.cards');
    cardsSection.innerHTML = "";

    if (inputArray.length == 0) {
        document.querySelector('.search_error').style.display = "block";
    }else{

        inputArray.forEach((recipe) => {
            const recipeModel = recipesFactory(recipe);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            cardsSection.appendChild(recipeCardDOM);
        });

    }
}
displayRecipe(recipes);
//fin de display recipes