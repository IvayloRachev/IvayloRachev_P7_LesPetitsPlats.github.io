function globalSearch() {
    const inputArray = [];
    let searchField = document.getElementById('search').value;

    if (searchField.length < 3 || searchField.length == "") {
        document.querySelector('.search_error').style.display = "block";
        document.querySelector('.search_error').style.display = "";
        displayRecipe(recipes);
        return false;
    }else {
        document.querySelector('.search_error').style.display = "none";

        for (let i = 0; i < recipes.length; i++) {
            let doublon = false;

            let description = recipes[i].description;
            if (description.toLowerCase().includes(searchField.toLowerCase()) && doublon == false) {
                inputArray.push(recipes[i]);
                doublon = true;
            }

            let names = recipes[i].name;
            if (names.toLowerCase().includes(searchField.toLowerCase()) && doublon == false) {
                inputArray.push(recipes[i]);
                doublon = true;
            }

            let ingredients = recipes[i].ingredients;
            for (let i = 0; i < ingredients.length; i++) {
                let ingredientsList = ingredients[i].ingredient;
                if (ingredientsList.toLowerCase().includes(searchField.toLowerCase()) && doublon == false) {
                    inputArray.push(recipes[i]);
                    doublon = true;
                }
            }

            let appliances = recipes[i].appliance;
            if (appliances.toLowerCase().includes(searchField.toLowerCase()) && doublon == false) {
                inputArray.push(recipes[i]);
                doublon = true;
            }

            let ustensils = recipes[i].ustensils;
            for (let i = 0; i < ustensils.length; i++) {
                let ustensilsList = ustensils[i];
                if (ustensilsList.toLowerCase().includes(searchField.toLowerCase()) && doublon == false) {
                    inputArray.push(recipes[i]);
                    doublon = true;
                }
            }

        };
        displayRecipe(inputArray);
        return true;
    }
}

let buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click', () => {
    console.log();
    globalSearch();
});

buttonSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        globalSearch();
    }
});

