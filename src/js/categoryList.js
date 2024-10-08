const categoryList = document.querySelector('.category-items-list');
const allCategories = document.querySelector('.categories-button');

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
}

function categoryBtnClick() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let categoryName = e.target.innerText;
            fetchChosenCategory(categoryName);
            
        }
        )
    }
    )
}

async function fetchChosenCategory(categoryName) {
    const url = `https://tasty-treats-backend.p.goit.global/api/recipes?category=${categoryName}&page=1&limit=9`
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


function createCategoryList(categories) {
    categories.forEach(category => {
        categoryList.innerHTML += `
            <li class="category-items"><button class="category-btn">${category}</button></li>
        `;
    })
}


// Insert fetch all items function here
// fetchItems();
// function categoryBtnClick() {
//     categoryBtn.addEventListener('click',  (e) => {
//         console.log(e.target.innerText);
//     });
// }
// filter all the items by the chosen category
// categoryBtn.addEventListener('click', () => {
// });


document.addEventListener('DOMContentLoaded', fetchCategories);
