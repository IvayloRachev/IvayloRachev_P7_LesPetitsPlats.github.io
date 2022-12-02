function recipesFactory(data) {
    const {id, name, time, description} = data
    const picture = `./assets/limonade.jpg`

    function getRecipeCardDOM() {
        const card = document.createElement('article');
        card.setAttribute('class', 'recipe_card');
        card.setAttribute('id', `${id}`);

        let codeHtml = `<img class="recipe__image" src="${picture}" alt="${name}">
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
            codeHtml += `<p class="ingredient"><span class="ingredient_bold">${ingredientName}:</span> ${quantityName}</p>`;
        });
        codeHtml +=         `</div>
                            <p class="recipe_desc">${description}</p>
                        </div>
                    </div>`
        card.innerHTML = codeHtml;

        return(card);
    }
    return {getRecipeCardDOM}
}