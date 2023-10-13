document.addEventListener("DOMContentLoaded", function() {
    var barsContainer = document.querySelector('.sound-bars');
    var numBars = 15;
    var bars = [];
  
    for (let i = 0; i < numBars; i++) {
      let bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = (i * 2 + 2) + 'px';
      barsContainer.appendChild(bar);
      bars.push(bar);
    }
  
    function animateBars() {
      bars.forEach(function(bar, index) {
        setTimeout(function() {
          bar.style.transform = 'scaleY(' + (Math.random() * 0.5 + 1) + ')';
        }, index * 100); 
      });
  
      setTimeout(animateBars, numBars * 10 + 10);
    }
  
    animateBars();
  });
  