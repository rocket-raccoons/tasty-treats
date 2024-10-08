const categoryList = document.querySelector('.category-items-list');
const allCategories = document.querySelector('.categories-button');
// const mainCards = document.querySelector('.cards-listing');

async function fetchCategories() {
    const url = "https://tasty-treats-backend.p.goit.global/api/categories"
    try {
        const response = await fetch(url);
        const data = await response.json();
        const categories = data.map(category => category.name);
        createCategoryList(categories);
        categoryBtnClick();
    } catch (error) {
        console.log(error);
    }
};

async function fetchChosenCategory(categoryName) {
    const url = `https://tasty-treats-backend.p.goit.global/api/recipes?category=${categoryName}&page=1&limit=9`
    try {
        const response = await fetch(url);
        const data = await response.json();
        const recipes = data.results;
        console.log(recipes);
        // renderChosenCategory(recipes);
    } catch (error) {
        console.log(error);
    }
};


function categoryBtnClick() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(button => {
                button.style.color = ""; // 
            });
            e.target.style.color = "var(--primary-color)";
            let categoryName = e.target.innerText;
            fetchChosenCategory(categoryName);
        })
    })
};

function createCategoryList(categories) {
    categories.forEach(category => {
        categoryList.innerHTML += `
            <li class="category-items"><button class="category-btn">${category}</button></li>
        `;
    })
};



// Render the screen by chosen category

// #Bu Fonksiyon Murat'ın yapacağı renderAllItems fonksiyonuna göre düzenlenecek.

// function renderChosenCategory(recipes) {
//     mainCards.innerHTML = '';
//     recipes.forEach(recipe => {
//         const recipeCard = document.createElement('div');
//         recipeCard.classList.add('recipe-card');
//         recipeCard.innerHTML = `
//             <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
//             <h3 class="recipe-title">${recipe.name}</h3>
//             <p class="recipe-description">${recipe.description}</p>
//         `;
//         mainCards.appendChild(recipeCard);
//     })
// };




// Reset the main card section

// function resetMainCards() {
//     mainCards.innerHTML = '';
//     renderAllItems(); #Murat'tan gelecek fonksiyon
// };




// allCategories.addEventListener('click', resetMainCards);
document.addEventListener('DOMContentLoaded', fetchCategories);

//  #Yorum satırına alınmış her şey Murat'ın yapacağı js fonksiyonlarına göre entegre edilip açılacak.