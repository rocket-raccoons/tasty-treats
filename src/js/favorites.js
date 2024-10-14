const messageContainer = document.getElementById('message-container'); // to select message container
let currentCategory = 'All Categories';
let previousSelectedButton = null;

// to fetch(?) ids from local storage
function getFavoriteIds() {
    const favArrString = localStorage.getItem('favArr');
    let favArr = [];
    // to fetch favArr from local storage
    try {
        favArr = favArrString ? JSON.parse(favArrString) : [];
    } catch (error) {
        console.error('Error parsing favArr from localStorage:', error);
        favArr = [];  // if favoriteIdsturns null then return an empty array
    }

    const favoriteCards = document.querySelector('.favoriteCards');

    if (favoriteCards) {
        favoriteCards.innerHTML = ""; // clean all mesages in message container
    }

    if (favArr.length === 0) {
        messageContainer.innerHTML = `
        <div class="fav-message-container">
            <img src="./img/raccoon-sad-fav.png" class="fav-raccoon">
            <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
            <img src="./img/raccoon-sad-fav.png" class="fav-chefs-hat">
        </div>
        `;
    }
    return favArr;
}

//async function to fetch data 
async function fetchById(id) {
    const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const recipe = await response.json();
    localStorage.setItem(`recipe_${id}`, JSON.stringify(recipe)); // Store the recipe in local storage
    return recipe;
}

//to fetch all recipes that user selected as favorite
async function fetchFavorites() {
    const favoriteIds = getFavoriteIds(); //get ids from local storage
    try {
        const recipes = await Promise.all(favoriteIds.map(id => fetchById(id))); // use these ids to fetch recipes from api. Promise.all means makes all api requests in parallel AND bringd together into the results
        return recipes; //return all recipes in array
    } catch (error) {
        console.error('Error fetching favorite recipes:', error);
        return []; // Return an empty array if there is an error
    }
}

//to display recipes 
async function renderFavoriteRecipes() {
    const recipes = await fetchFavorites();

    if (recipes.length === 0) {
        // Display a message if no favorite recipes are found
    } else {
        renderCategoryNames();
        renderRecipes(recipes);
    }
}

function favoritesHeartBtn() {
    const likeButtons = document.querySelectorAll('.heard-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const recipeId = button.dataset.id;
            const recipeCategory = button.dataset.category;
            const favArrString = localStorage.getItem('favArr');
            let favArr = favArrString ? JSON.parse(favArrString) : [];

            if (favArr.includes(recipeId)) {
                favArr.splice(favArr.indexOf(recipeId), 1);
                localStorage.setItem('favArr', JSON.stringify(favArr));
            }

            // Check if there are any remaining recipes of the same category
            const remainingRecipes = favArr.filter(id => {
                const recipe = JSON.parse(localStorage.getItem(`recipe_${id}`));
                return recipe && recipe.category === recipeCategory;
            });

            if (remainingRecipes.length === 0) {
                const favArrCategoryString = localStorage.getItem('favArrCategory');
                let favArrCategory = favArrCategoryString ? JSON.parse(favArrCategoryString) : [];

                if (favArrCategory.includes(recipeCategory)) {
                    favArrCategory.splice(favArrCategory.indexOf(recipeCategory), 1);
                    localStorage.setItem('favArrCategory', JSON.stringify(favArrCategory));
                }
            }

            renderCategoryNames();
            if (currentCategory === 'All Categories') {
                renderFavoriteRecipes();
            } else {
                filterRecipesByCategory(currentCategory);
            }
        });
    });
}

function addHeartButtonListeners() {
    const likeButtons = document.querySelectorAll('.heard-button');
    let favCategoryArr = [];
    likeButtons.forEach(button => {
        if (!favCategoryArr.includes(button.dataset.category)) {
            favCategoryArr.push(button.dataset.category);
        }
    });
    favCategoryArr.sort();
}

function renderCategoryNames() {
    const favCategoriesList = document.querySelector('.fav-categories-list');
    const favArrCategoryString = localStorage.getItem('favArrCategory');
    let favArrCategory = favArrCategoryString ? JSON.parse(favArrCategoryString) : [];
    favCategoriesList.innerHTML = '';

    const allCategoriesLi = document.createElement('li');
    const allCategoriesButton = document.createElement('button');
    allCategoriesButton.textContent = 'All Categories';
    allCategoriesButton.classList.add('category-button');
    allCategoriesButton.addEventListener('click', () => {
        currentCategory = 'All Categories';
        if (previousSelectedButton) {
            previousSelectedButton.style.backgroundColor = '';
            previousSelectedButton.style.color = '';
            previousSelectedButton.style.border = '';
        }
        allCategoriesButton.style.backgroundColor = 'var(--primary-color)';
        allCategoriesButton.style.color = '#fff';
        allCategoriesButton.style.border = '1px solid var(--primary-color)';
        previousSelectedButton = allCategoriesButton;
        renderFavoriteRecipes();
    });
    allCategoriesLi.appendChild(allCategoriesButton);
    favCategoriesList.appendChild(allCategoriesLi);

    favArrCategory.forEach(category => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = category;
        button.classList.add('category-button');
        button.addEventListener('click', () => {
            currentCategory = category;
            if (previousSelectedButton) {
                previousSelectedButton.style.backgroundColor = '';
                previousSelectedButton.style.color = '';
                previousSelectedButton.style.border = '';
            }
            button.style.backgroundColor = 'var(--primary-color)';
            button.style.color = '#fff';
            button.style.border = '1px solid var(--primary-color)';
            previousSelectedButton = button;
            filterRecipesByCategory(category);
        });
        li.appendChild(button);
        favCategoriesList.appendChild(li);
    });
}

function filterRecipesByCategory(category) {
    fetchFavorites().then(recipes => {
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        renderRecipes(filteredRecipes);
    });
}

function renderRecipes(recipes) {
    const favoriteCards = document.querySelector('.favorite-cards');
    favoriteCards.innerHTML = '';

    recipes.forEach(recipe => {
        const filledStars = Math.round(recipe.rating);
        const emptyStars = 5 - filledStars;
        const cardHTML = `
        <li class="cards-listing" style="background-image: url(${recipe.preview});">
            <button class="heard-button" data-category="${recipe.category}" data-id="${recipe._id}" aria-label="like-btn">
                <svg class="svg-heard add-to-fav" data-id="${recipe._id}" width="22px" height="22px">
                    <use href="./svg/sprite.svg#icon-heart-filled"></use>
                </svg>
            </button>
            <div class="card-content-container">
                <div class="text-container">
                    <h3 class="card-title">${recipe.title}</h3>
                    <p class="specification-text">${recipe.description}</p>
                </div>
                <div class="card-rating-container">
                    <div class="rating-container">
                        <p class="rating-text">${recipe.rating.toFixed(1)}</p>
                        <div class="star-container">
                            ${`<svg class="card-star-svg">
                            <use href="./svg/sprite.svg#icon-star"></use>
                            </svg>`.repeat(filledStars)}
                            ${`<svg class="card-star-svg">
                            <use href="./svg/sprite.svg#icon-emptystar"></use>
                            </svg>`.repeat(emptyStars)}
                        </div>    
                    </div>
                    <button class="recipe-button" data-id="${recipe._id}">See recipe</button>
                </div>      
            </div>
        </li>
        `;
        favoriteCards.innerHTML += cardHTML;
    });

    favoritesHeartBtn();
    addHeartButtonListeners();
}

document.addEventListener('DOMContentLoaded', renderFavoriteRecipes);