document.addEventListener('DOMContentLoaded', function() {
    var buttondown = document.querySelector('.buttondown');
    var middleSection = document.getElementById('middle');
  
    buttondown.addEventListener('click', function() {
      var offset = 140;
      var targetPosition = middleSection.offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });