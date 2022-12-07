//create and delete tags
const filterTags = document.querySelector('.filter_tags');
const elementsOfTags = document.querySelectorAll('.el');

function createTag(el) {
    const tag = document.createElement('div');
    tag.setAttribute('class', 'tags');
    let tagHtml = `<p>${el.innerHTML}</p>
                   <img src="./assets/close.png" class="close_tag" alt="Fermer le tag">`;
    tag.innerHTML = tagHtml;
    filterTags.appendChild(tag);

    el.style.display = 'none';

    if (el.getAttribute('categorie') == "ingredient") {
        tag.setAttribute('categorie', 'ingredient');
        tag.style.background = "#3282F7";

        const modalIng = document.querySelector('.ingredients_list');
        const placeHolderIngredient = document.getElementsByName('Ingrédients');
        if (modalIng.classList.contains('none')) {
            modalIng.classList.remove('none');
        } else {
            modalIng.classList.add('none');
            placeHolderIngredient[0].placeholder = "Ingrédients";
        }
    }
    if (el.getAttribute('categorie') == "appliance") {
        tag.setAttribute('categorie', 'appliance');
        tag.style.background = "#68D9A4";

        const modalDev = document.querySelector('.devices_list');
        const placeHolderDevice = document.getElementsByName('devices');
        if (modalDev.classList.contains('none')) {
            modalDev.classList.remove('none');
        } else {
            modalDev.classList.add('none');
            placeHolderDevice[0].placeholder = "Appareils";
        }
    }
    if (el.getAttribute('categorie') == "utensil") {
        tag.setAttribute('categorie', 'utensil');
        tag.style.background = "#ED6454";

        const modalUt = document.querySelector('.utensils_list');
        const placeHolderUtensil = document.getElementsByName('utensils');
        if (modalUt.classList.contains('none')) {
            modalUt.classList.remove('none');
        } else {
            modalUt.classList.add('none');
            placeHolderUtensil[0].placeholder = "Ustensiles";
        }
    }
}
//fi de create and delete tags

//take elements
const allIngredients = document.querySelectorAll('.ingredient_tag');
const allDevices = document.querySelectorAll('.device_tag');
const allUtensils = document.querySelectorAll('.utensil_tag');
// fin de take elements

//to display recipes
elementsOfTags.forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('.search_error').style.display = "none";
        let inputRecipaArray = [];
        createTag(el);

        function displayRecipeFilter() {
            document.getElementById('search').value = "";

            let allTags = document.querySelectorAll('.tags');
            recipes.forEach((recipe) => {
                let tagOnRecipe = true;

                allTags.forEach((tag) => {
                    if (tagOnRecipe == true) {
                        if (tag.getAttribute('categorie') == 'ingredient') {
                            let ingredients = recipe.ingredients;
                            tagOnRecipe = false;
                            ingredients.forEach((ingredient) => {
                                let ingredientsTabList = ingredient.ingredient;
                                if (ingredientsTabList.toLowercase() == (tag.innerText.toLowerCase())) {
                                    tagOnRecipe = true;
                                }
                            })
                        }

                        if (tag.getAttribute('categorie') == 'appliance') {
                            let appliances = recipe.appliance;
                            if (!tag.innerText.toLowerCase().includes(appliances.toLowerCase())) {
                                tagOnRecipe = true;
                            }
                        }

                        if (tag.getAttribute('categorie') == 'utensil') {
                            let ustensils = recipe.ustensils;
                            tagOnRecipe = false;
                            ustensils.forEach((ustensil) => {
                                if (ustensil.toLowerCase() == (tag.innerText.toLowerCase())) {
                                    tagOnRecipe = true;
                                }
                            })
                        }
                    }
                })

                if (tagOnRecipe == true) {
                    inputRecipaArray.push(recipe);
                    console.log(recipe);
                }
            })
            displayRecipe(inputArray);
        }
        displayRecipeFilter();

        function filterElements() {
            allIngredients.forEach((ingredientOnList) => {
                ingredientOnList.style.display = "none";
                inputRecipaArray.forEach((remainRecipes) => {
                    let ingredients = remainRecipes.ingredients;
                    ingredients.forEach((ingredient) => {
                        let tagOnRecipe = ingredient.ingredient;
                        if (tagOnRecipe.toLowerCase().includes(ingredientOnList.innerText.toLowerCase())) {
                            ingredientOnList.style.display = "block";
                        }
                    })
                })
            })

            allDevices.forEach((applianceOnList) => {
                applianceOnList.style.display = "none";
                inputRecipaArray.forEach((remainRecipes) => {
                    let appliances = remainRecipes.appliance;
                    if (appliances.toLowerCase().includes(applianceOnList.innerText.toLowerCase())) {
                        applianceOnList.style.display = "block";
                    }
                })
            })

            allUtensils.forEach((ustensilOnList) => {
                ustensilOnList.style.display = "none";
                inputRecipaArray.forEach((remainRecipes) => {
                    let ustensils = remainRecipes.ustensils;
                    ustensils.forEach((ustensil) => {
                        if (ustensil.toLowerCase().includes(ustensilOnList.innerText.toLowerCase())) {
                            ustensilOnList.style.display = "block";
                        }
                    })
                })
            })
        }
        filterElements();

        const close = document.querySelectorAll('.close_tag');
        close.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                el.style.display = "block";
                e.target.closest('div').remove();

                inputRecipaArray = [];
                displayRecipeFilter();
                filterElements();
            })
        })
    })
})
