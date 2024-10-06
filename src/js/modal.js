document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal-close-button');

    // Function to open the modal with fade-in effect
    function openModal() {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('fade-in');
        }, 10);
    }

    // Function to close the modal with fade-out effect
    function closeModal() {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        modal.addEventListener('animationend', () => {
            modal.style.display = 'none';
            modal.classList.remove('fade-out');
        }, { once: true });
    }

    // Event listener for the close button
    closeButton.addEventListener('click', closeModal);

    // Example to open the modal (you can remove this if you have your own trigger)
    document.querySelector('.open-modal-button').addEventListener('click', openModal);
});