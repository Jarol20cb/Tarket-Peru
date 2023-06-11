$(document).ready(function() {
    $(".custom-navbar .link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
          window.location.hash = hash;
        });
        // Cerrar el menú desplegable si está abierto
        $('#nav-toggle').removeClass('is-active');
        $('.custom-navbar .nav').removeClass('show');
      }
    });
  
    $('#nav-toggle').click(function(){
      $(this).toggleClass('is-active')
      $('.custom-navbar .nav').toggleClass('show');
    });
  });
  
