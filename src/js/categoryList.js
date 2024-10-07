const categoryList = document.querySelector('.category-list');
const categoryBtn = document.querySelector('.category-btn');
const allCategories = document.querySelector('.categories-button');

async function fetchCategories() {
    const url = "https://tasty-treats-backend.p.goit.global/api/categories"
    try {
        const response = await fetch(url);
        const data = await response.json();
        const categories = data.map(category => category.name);
        createCategoryList(categories);
    } catch (error) {
        console.log(error);
    }

}

function createCategoryList(categories) {
    categories.forEach(category => {
        categoryList.innerHTML += `
            <ul>
            <li class="category-items"><button class="category-btn">${category}</button></li>
        </ul>
        `;
    })
}

// Insert fetch all items function here
// fetchItems();
// filter all the items by the chosen category
// categoryBtn.addEventListener('click', () => {
// });


document.addEventListener('DOMContentLoaded', fetchCategories);