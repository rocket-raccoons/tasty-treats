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

     
        const fragment = document.createDocumentFragment();

        recipes.forEach((recipe) => {
            const li = document.createElement("li");

         
            const recipeContainer = document.createElement("div");
            recipeContainer.classList.add("recipe-container");

         
            const image = document.createElement("img");
            image.src = recipe.preview || 'default-image.jpg';
            image.alt = recipe.title || 'Unknown Recipe';

            const contentDiv = document.createElement("div");
            contentDiv.classList.add("recipe-content");

     
            const title = document.createElement("h3");
            title.textContent = recipe.title || 'Unknown Recipe';
            title.classList.add("recipe-content-title");
            
          

          
            const instructions = document.createElement("p");
            instructions.textContent = recipe.description || 'No instructions provided';
            instructions.classList.add("recipe-content-instructions");

         
            contentDiv.appendChild(title);
            contentDiv.appendChild(instructions);
            recipeContainer.appendChild(image);
            recipeContainer.appendChild(contentDiv);

            li.appendChild(recipeContainer);

            console.log("Appending LI:", li);

         
            fragment.appendChild(li);
        });

      
        popularRecipes.appendChild(fragment);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
