function recipesFactory(data) {
    const {id, name, time, description} = data
    const picture = `./assets/limonade.jpg`

    function getRecipeCardDOM() {
        const card = document.createElement('article');
        card.setAttribute('class', 'recipe_card');
        card.setAttribute('id', `${id}`);

        let html = `<img class="recipe__image" src="${picture}" alt="Photo de la recette>"
                    <div class="recipe__infos">
                        <div class="recipe_title_time">
                            <h2 class="recipe_title">${name}</h2>
                            <div class="recipe_time">
                                <img src="./assets/time.png" alt="icône horloge">
                                <p>${time} min</p>
                            </div>
                        </div>
                        
                        <div class="ingredients_recipe_text">
                        <div class="ingredients_tab">`

        data.ingredients.forEach(ingredient => {
            let ingredientName = `${ingredient.ingredient}`;
            let quantityName = `${ingredient.quantity}`;
            if (quantityName === `${undefined}`) {
                quantityName = "";
            }
            html += `<p class="ingredient"><span class="ingredient_bold">${ingredientName}:</span> ${quantityName}</p>`;
        });
        html +=         `</div>
                            <p class="recipe_desc">${description}</p>
                        </div>
                    </div>`
        card.innerHTML = html;

        return(card);
    }
    return getRecipeCardDOM
}