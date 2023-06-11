window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in-out');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (position < windowHeight && position > -element.clientHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
  });
  