function globalSearch() {
    const inputArray = [];
    let searchField = document.getElementById('search').value;

    if (searchField.length < 3) {
        document.querySelector('.search_error').style.display = "block";
        displayRecipe(recipes);
    }else {
        document.querySelector('.search_error').style.display = "none";

        for (let i = 0; i < recipes.length; i++) {
            let displaySort = false;

            let names = recipes[i].name;
            if (names.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                inputArray.push(recipes[i]);
                displaySort = true;
            }

            let ingredients = recipes[i].ingredients;
            for (let i = 0; i < ingredients.length; i++) {
                let ingredientsList = ingredients[i].ingredient;
                if (ingredientsList.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                    inputArray.push(recipes[i]);
                    displaySort = true;
                }
            }

            let description = recipes[i].description;
            if (description.toLowerCase().includes(searchField.toLowerCase()) && displaySort == false) {
                inputArray.push(recipes[i]);
                displaySort = true;
            }
        };
        displayRecipe(inputArray);
    }
}

let buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click', () => {
    console.log();
    globalSearch();
});