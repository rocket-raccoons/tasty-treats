document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular");
        
        
        const data = await response.json();
        console.log(data); 

     
        const recipes = data; 
        console.log(recipes); 

       
        const popularRecipes = document.querySelector("#popular-recipes-gallery");
        
       
        popularRecipes.innerHTML = ''; 

       
        recipes.forEach((recipe) => {
            const li = document.createElement("li");

            const image = recipe.preview || 'default-image.jpg'; 
            const title = recipe.title || 'Unknown Recipe';
            const instructions = recipe.description || 'No instructions provided';

            li.innerHTML = `
                <img src="${image}" alt="${title}">
                <h3>${title}</h3>
                <p>${instructions}</p>
            `;

            console.log("Appending LI:", li); 
            popularRecipes.appendChild(li); 
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
