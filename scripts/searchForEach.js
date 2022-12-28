//global search
function globalSearch() {
    const inputArray = [];
    let searchField = document.getElementById('search').value;

    if (searchField.length < 3) {
        document.querySelector('.search_error').style.display = "block";
    }else {
        document.querySelector('.search_error').style.display = "none";

        recipes.forEach((recipe) => {
            let displaySort = false;

            let names = recipe.name;
            if (names.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                inputArray.push(recipe);
                displaySort = true;
            }

            let ingredients = recipe.ingredients;
            ingredients.forEach((ingredient) => {
                let ingredientsList = ingredient.ingredient;
                if (ingredientsList.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                    inputArray.push(recipe);
                    displaySort = true;
                }
            });

            let description = recipe.description;
            if (description.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                inputArray.push(recipe);
                displaySort = true;
            }
        });
        displayRecipe(inputArray);
    }
}

const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click', () => {
    console.log();
    globalSearch();
});

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    if (searchInput.value.length > 2) {
        globalSearch();
    }
});

const refresh = document.getElementById('search');
refresh.addEventListener('input', function() {
    if (searchInput.value.length <= 2) {
        displayRecipe(recipes);
        document.querySelector('.search_error').style.display = "block";
    }
});
//fin de global search