// modal.js
export function initModal() {
    const modal = document.getElementById('recipeModal');
    const closeButton = modal.querySelector('.modal-close-button');
  
    closeButton.onclick = closeModal;
  
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  }
  
  export async function openModal(recipeId) {
    const modal = document.getElementById('recipeModal');
    const modalContent = modal.querySelector('.modal-content');
  
    // Show loading state
    modalContent.innerHTML = '<p>Loading recipe details...</p>';
    modal.style.display = 'block';
  
    try {
      const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${recipeId}`);
      const recipe = await response.json();
      
      // console.log(recipe.youtube);
      // console.log(recipe.cookingTime)
      // Update modal content with recipe details
      modalContent.innerHTML = `
        <div class= "modal-heading">
          <div style="flex: 1;">
            <iframe class="modal-iframe" src="https://www.youtube.com/embed/${new URL(recipe.youtube).searchParams.get('v')}" frameborder="0" allowfullscreen></iframe>
          </div>
        <div class="modal-recipe-container" style="flex: 1;">
        <h2>${recipe.title}</h2>
        <div class="modal-rating-container">
        <div class="modal-star-container">
        <p class="rating star_rating">${'★'.repeat(Math.round(recipe.rating))}☆</p>
        
        </div>
        <!-- <p class="cooking-time">${recipe.cookingTime} min</p> -->
        </div>
        <div class="modal-recipe-ingredients-container">
        <!-- <h3>Ingredients:</h3> -->
        <ul class="modal-recipe-ingredients">
          ${recipe.ingredients.map(ing => `<li class="modal-recipe-ingredients-item"><p class="ingredient">${ing.name}</p><p class="ingredient-portion"> ${ing.measure}</p></li>`).join('')}
        </ul>
        </div>
        </div>
        </div>
        <p>${recipe.instructions}</p>
        <div style="display: flex; gap: 20px; margin-top: 20px;">
          <button class="addToFavoriteButton">Add to Favorite</button>
          <button class="giveRatingButton">Give a Rating</button>
        </div>
        </div>
      `;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      modalContent.innerHTML = '<p>Error loading recipe details. Please try again.</p>';
    }
  }
  
  export function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
  }