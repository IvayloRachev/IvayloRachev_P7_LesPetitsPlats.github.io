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

        const devicesTab = recipe.appliance;
        devicesArray.push(`<li class="device_tag el" categorie="appliance">${devicesTab.toLowerCase()}</li>`);

        const utensils = recipe.ustensils;
        utensils.forEach((ustensil) => {
            utensilsArray.push(`<li class="utensil_tag el" categorie="utensil">${ustensil.toLowerCase()}</li>`);
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
            const modalbg = document.querySelector('.ingredients_list');
            const ingredientPlaceHolder = document.getElementsByName('ingredients');
            ingredientPlaceHolder[0].placeholder = "Rechercher un ingrédient";

            if (modalbg.classList.contains('none')) {
                modalbg.classList.remove('none');
            } else {
                modalbg.classList.add('none');
                ingredientPlaceHolder[0].placeholder = "Ingrédients";
            }
        } else if (e.target.classList.contains('down_utensils')) {
            const modalbg = document.querySelector('.devices_list');
            const devicePlaceHolder = document.getElementsByName('devices');
            devicePlaceHolder[0].placeholder = "Rechercher un appareil";

            if (modalbg.classList.contains('none')) {
                modalbg.classList.remove('none');
            } else {
                modalbg.classList.add('none');
                ingredientPlaceHolder[0].placeholder = "Appareils"; 
            }
        } else if (e.target.classList.contains('down_utensils')) {
            const modalbg = document.querySelector('.utensils_list');
            const utensilPlaceHolder = document.getElementsByName('utensils');
            utensilPlaceHolder[0].placeholder = "Rechercher un ustensile";

            if (modalbg.classList.contains('none')) {
                modalbg.classList.remove('none');
            } else {
                modalbg.classList.add('none');
                utensilPlaceHolder[0].placeholder = "Ustensiles";
            }
        }
    });
});
//fin de open close tags modals

//filter recipes
function filterRecipes() {
    const searchIngredientTag = document.getElementById('ingredients');
    const searchDeviceTag = document.getElementById('devices');
    const searchUtensilTag = document.getElementById('utensils');

    searchIngredientTag.addEventListener('input', filterIngredients);
    searchDeviceTag.addEventListener('input', filterDevices);
    searchUtensilTag.addEventListener('input', filterUtensils);

    function filterIngredients() {
        const ingredientTagValue = searchIngredientTag.value.toLowerCase();
        const allIngredients = document.querySelectorAll('.ingredient_tag');
        const toDisplay = document.querySelector('.ingredients_list');
        toDisplay.classList.remove('none');

        allIngredients.forEach((ingredient) => {
            let test = ingredient.innerHTML;
            if (test.toLowerCase().includes(ingredientTagValue)) {
                ingredient.style.display = '';
            } else {
                ingredient.style.display = 'none';
            }
        });
    }

    function filterDevices() {
        const deviceTagValue = searchDeviceTag.value.toLowerCase();
        const allDevices = document.querySelectorAll('.device_tag');
        const toDisplay = document.querySelector('.devices_list');
        toDisplay.classList.remove('none');

        allDevices.forEach((device) => {
            let test = device.innerHTML;
            if (test.toLowerCase().includes(deviceTagValue)) {
                device.style.display = '';
            } else {
                device.style.display = 'none';
            }
        });
    }

    function filterUtensils() {
        const utensilTagValue = searchUtensilTag.value.toLowerCase();
        const allUtensils = document.querySelectorAll('.utensil_tag');
        const toDisplay = document.querySelector('.utensils_list');
        toDisplay.classList.remove('none');

        allUtensils.forEach((utensil) => {
            let test = utensil.innerHTML;
            if (test.toLowerCase().includes(utensilTagValue)) {
                utensil.style.display = '';
            } else {
                utensil.style.display = 'none';
            }
        });
    }
}
//fin de filter recipes
filterRecipes();