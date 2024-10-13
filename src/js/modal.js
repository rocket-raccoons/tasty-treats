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
      
      console.log(recipe.youtube);
      // Update modal content with recipe details
      modalContent.innerHTML = `
        <div style="padding: 20px;">
        <button class="modal-close-button" onclick="closeModal()">&times;</button> 
        <div class= "modal-heading">
          <div style="flex: 1;">
            <iframe class="modal-iframe" src="https://www.youtube.com/embed/${new URL(recipe.youtube).searchParams.get('v')}" frameborder="0" allowfullscreen></iframe>
          </div>
        <div style="flex: 1;">
        <h2>${recipe.title}</h2>
        <p>Rating: ${recipe.rating}</p>
        <h3>Ingredients:</h3>
        <ul class="modal-recipe-ingredients">
          ${recipe.ingredients.map(ing => `<li class="modal-recipe-ingredients-item">${ing.name}: ${ing.measure}</li>`).join('')}
        </ul>
        </div>
        </div>
        <p>${recipe.instructions}</p>
        <div style="display: flex; gap: 20px; margin-top: 20px;">
          <button id="addToFavoriteButton">Add to Favorite</button>
          <button id="giveRatingButton">Give a Rating</button>
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