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
//fin de tags array

//open close tags modals
const btnModal = document.querySelectorAll('.down_button');
btnModal.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('down_ingredients')) {
            const modalIng = document.querySelector('.ingredients_list');
            const ingredientPlaceHolder = document.getElementsByName('ingredients');
            ingredientPlaceHolder[0].placeholder = "Rechercher un ingrédient";

            if (modalIng.classList.contains('none')) {
                modalIng.classList.remove('none');
            } else {
                modalIng.classList.add('none');
                ingredientPlaceHolder[0].placeholder = "Ingrédients";
            }
        } else if (e.target.classList.contains('down_utensils')) {
            const modalDev = document.querySelector('.devices_list');
            const devicePlaceHolder = document.getElementsByName('devices');
            devicePlaceHolder[0].placeholder = "Rechercher un appareil";

            if (modalDev.classList.contains('none')) {
                modalDev.classList.remove('none');
            } else {
                modalDev.classList.add('none');
                ingredientPlaceHolder[0].placeholder = "Appareils"; 
            }
        } else if (e.target.classList.contains('down_utensils')) {
            const modalUt = document.querySelector('.utensils_list');
            const utensilPlaceHolder = document.getElementsByName('utensils');
            utensilPlaceHolder[0].placeholder = "Rechercher un ustensile";

            if (modalUt.classList.contains('none')) {
                modalUt.classList.remove('none');
            } else {
                modalUt.classList.add('none');
                utensilPlaceHolder[0].placeholder = "Ustensiles";
            }
        }
    });
});