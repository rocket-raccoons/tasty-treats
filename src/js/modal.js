// const tempRecipeID = document.getElementById('recipeID').value;
const tempRecipeID = None

document.addEventListener('DOMContentLoaded', () => {
    // const modal = document.querySelector('.modal');
    const modal = document.getElementById('recipeModal');
    const closeButton = document.querySelector('.modal-close-button');

    // Function to open the modal with fade-in effect
    function openModal() {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('fade-in');
        }, 10);
    }

    // Function to close the modal with fade-out effect
    function closeModal() {
        modal.style.display = 'none';
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        // modal.addEventListener('animationend', () => {
        //     modal.style.display = 'none';
        //     modal.classList.remove('fade-out');
        // }, { once: true });
    }

    // Event listener for the close button
    closeButton.addEventListener('click', closeModal);

    // Example to open the modal (you can remove this if you have your own trigger)
    // document.querySelector('.see-recipe').addEventListener('click', openModal);
    document.querySelector('.recipe-button').addEventListener('click', openModal);
});