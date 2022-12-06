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