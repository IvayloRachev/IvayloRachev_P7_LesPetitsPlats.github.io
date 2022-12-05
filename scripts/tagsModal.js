//tags arrays
function tagLists(listRecipes) {
    let ingredientsList = document.querySelector('.ingredients_list');
    const ingredientsArray = [];
    let devicesList = document.querySelector('.devices_list');
    const devicesArray = [];
    let utensilsList = document.querySelector('.utensils_list');
    const utensilsArray = [];

    listRecipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        ingredients.forEach((ingredient) => {
            let ingredientsTab = ingredient.ingredient;
            ingredientsArray.push(`<li class="ingredient_tag el" categorie="ingredient">${ingredientsTab.toLowerCase()}</li>`);
        });

        const devices = recipe.appliance;
        devicesArray.push(`<li class="device_tag el" categorie="appliance">${devices.toLowerCase()}</li>`);

        const utensils = recipe.utensils;
        utensils.forEach((utensil) => {
            utensilsArray.push(`<li class="utensil_tag el" categorie="utensil">${utensil.toLowerCase()}</li>`);
        });
    });

    let newIngredientsList = [... new Set(ingredientsArray)];
    ingredientsList.innerHTML += `<ul class="tag_list">${newIngredientsList.join('')}</ul>`;
    let newDevicesList = [... new Set(devicesArray)];
    devicesList.innerHTML += `<ul class="tag_list">${newDevicesList.join('')}</ul>`;
    let newUtensilsList = [... new Set(utensilsArray)];
    utensilsList.innerHTML += `<ul class="tag_list">${newUtensilsList.join('')}</ul>`;
};
tagLists(recipes);