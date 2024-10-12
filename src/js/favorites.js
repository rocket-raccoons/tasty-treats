// // to fetch header
//     fetch('partials/header.html')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//                         .then(data => {
//                 const tempDiv = document.createElement('div'); // to add div temporarly 
//                 tempDiv.innerHTML = data; // add to the temp div

//                 // just select navbar
//                 const navbar = tempDiv.querySelector('nav.navbar');

//                 // if theres navbar add it
//                 if (navbar) {
//                     document.getElementById('header').appendChild(navbar); // add navbar to the heaeder
//                 } else {
//                     console.error('Navbar not found in header.html');
//                 }
//             })
//             .catch(error => {
//                 console.error('Fetch error:', error);
//             });



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

    const messageContainer = document.getElementById('message-container');
    
        if (messageContainer) { 
            messageContainer.innerHTML = ""; // clean all mesages in message container
        }


    if (favArr.length === 0 && messageContainer) {
        messageContainer.innerHTML = `
        <div class="fav-message-container">
        <svg class="fav-chefs-hat" type="fav-chefs-hat-svg" width="68" height="58">
            <use href="./svg/sprite.svg#icon-chef-hat">
        </svg> <br><br><br>
    <p class="fav-message">It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
        </div>
        `;
}
return favArr;
            } 

//async function to fetch data 
async function fetchById(id) { 
    const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
        if (!response.ok) {
        throw new Error('Network response was not ok');// to control if the fetch is okay
    }
    const recipe = await response.json(); //turn api response JSN format
    return recipe;


}


//to fetch all recipes that user selected as favorite
async function fetchFavorites() {
    const favoriteIds = getFavoriteIds();//get ids from local storage
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
    
    const recipes = await fetchFavorites(); //fetch favorite recipes with fetchAllFavorites function

    if (recipes.length === 0) { 
        // console.log('No favorite recipes found'); //eğer favori tarif yoksa mesaj göster
    
    } else {

        // messageContainer.innerHTML += favImgDiv; // fotoğrafları message container içerisine eklemek için
        const messageContainer = document.getElementById('message-container');
        messageContainer.innerHTML = '';
        

        const favImgDiv = `
        <div class="fav-img"> 
            <img class="fav-img-item-small" src="./img/favorites-small-plate-pic.png" alt="fav-hero-prepared-small-plate-photo">
        </div>`;
        recipes.forEach(recipe => {
            // Tarif kartının HTML yapısını burada oluştur
            const filledStars = Math.round(recipe.rating);
            const emptyStars = 5 - filledStars;
            const cardHTML = `
      <li class="cards-listing" style="background-image: url(${
        recipe.preview
      });">

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
              
            <button class="recipe-button" data-id="${
              recipe._id
            }">See recipe</button>
        </div>      
      </li>
    `;
            messageContainer.innerHTML += cardHTML; // Kartı messageContainer'a ekle
        });
    }
}



document.addEventListener('DOMContentLoaded', renderFavoriteRecipes);



// to fetch footer


