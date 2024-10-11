const orderForm = document.getElementById('orderForm');
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'block';
    orderForm.reset();
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}


