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
  
      // Update modal content with recipe details
      modalContent.innerHTML = `
        <button class="modal-close-button" onclick="closeModal()">&times;</button>
        <h2>${recipe.title}</h2>
        <img src="${recipe.thumb}" alt="${recipe.title}" style="max-width: 100%;">
        <p>${recipe.instructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          ${recipe.ingredients.map(ing => `<li>${ing.name}: ${ing.measure}</li>`).join('')}
        </ul>
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