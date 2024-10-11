const categoryList = document.querySelector('.category-items-list');
const allCategories = document.querySelector('.categories-button');
import { displayRecipes } from './cards.js';
import { fetchRecipes } from './cards.js';

async function fetchCategories() {
    const url = "https://tasty-treats-backend.p.goit.global/api/categories"
    try {
        const response = await fetch(url);
        const data = await response.json();
        const categories = data.map(category => category.name);
        createCategoryList(categories);
        categoryBtnClick();
    } catch (error) {
        console.log(error + "fetching categories");
    }
};

async function fetchChosenCategory(categoryName) {
    const url = `https://tasty-treats-backend.p.goit.global/api/recipes?category=${categoryName}&page=1&limit=9`
    try {
        const response = await fetch(url);
        const data = await response.json();
        const recipes = data.results;
        displayRecipes(recipes);
    } catch (error) {
        console.log(error + "fetching chosen category recipes");
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

function resetMainCards() {
    const cardList = document.querySelector('.cards-list');
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(button => {
        button.style.color = "";
    });
    cardList.innerHTML = '';
    fetchRecipes();
};




allCategories.addEventListener('click', resetMainCards);
document.addEventListener('DOMContentLoaded', fetchCategories);

