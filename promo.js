function showPopup(buyText) {
    var popupOverlay = document.getElementById('popupOverlay');
    buyText.textContent = 'BOUGHT!  ';
    buyText.parentElement.disabled = true;
  }