function recipesFactory(recipe) {
    function getRecipeCardDOM() {
        const card = document.createElement('div');
        card.setAttribute('id', `card${recipe.id}`);
        card.setAttribute('class', 'card');
        const cardImage = document.createElement('div');
        cardImage.setAttribute('class', 'card_img');
        card.appendChild(cardImage);
        const cardDesc = document.createElement('div');
        cardDesc.setAttribute('class', 'card_desc');
        card.appendChild(cardDesc);
        const cardTop = document.createElement('div');
        cardTop.setAttribute('class', 'top_card_desc');
        cardTop.innerHTML = `<h2>${recipe.name}</h2>
                            <div class="card_time">
                                <img src="../../assets/time.png alt="icône durée">
                                <p>${recipe.time} min</p>
                            </div>`;
        cardDesc.appendChild(cardTop);

        const cardBottom = document.createElement('div');
        cardBottom.setAttribute('class', 'bottom_card_desc');
        cardDesc.appendChild(cardBottom);

        const ingredientsDiv = document.createElement('div');
        ingredientsDiv.setAttribute('class', 'ingredients_div');
        cardBottom.appendChild(ingredientsDiv);

        const ulIngredientsDiv = document.createElement('ul');
        ulIngredientsDiv.setAttribute('id', `ingredients_ul${recipe.id}`);
        ingredientsDiv.appendChild(ulIngredientsDiv);

        recipe.ingredients.forEach((i) => {
            if (i.ingredient && i.quantity && i.unit) {
                ulIngredientsDiv.innerHTML += `<li> <strong>${i.ingredient}</strong> : ${i.quantity} ${i.unit}</li>`;
            }
            else if (i.ingredient && i.quantity) {
                ulIngredientsDiv.innerHTML += `<li> <strong>${i.ingredient}</strong> : ${i.quantity}</li>`;
            }
            else if (i.ingredient && i.quantity) {
                ulIngredientsDiv.innerHTML += `<li> <strong>${i.ingredient}</strong> : ${i.quantity}</li>`;
            }
            else {
                ulIngredientsDiv.innerHTML += `<li> <strong>${i.ingredient}</strong></li>`;
            }
        });

        const descriptionDiv = document.createElement('div');
        descriptionDiv.setAttribute('class', 'desc');
        descriptionDiv.innerHTML = `<p>${recipe.description}</p>`;
        cardBottom.appendChild(descriptionDiv);

        const productsDiv = document.createElement('div');
        productsDiv.setAttribute('class', 'products');

        const ulProductsDiv = document.createElement('ul');
        productsDiv.appendChild(ulProductsDiv);

        recipe.ingredients.forEach((i) => {
            ulProductsDiv.innerHTML += `<li class="ingProductsDiv">${i.ingredient}</li>`;
        });

        ulProductsDiv.innerHTML += `<li class="deviceProductsDiv">${recipe.appliance}</li>`;

        recipe.ustensils.forEach((i) => {
            ulProductsDiv.innerHTML += `<li class="ustProductsDiv">${i}</li>`;
        });
        card.appendChild(productsDiv);

        return card;
    }
}