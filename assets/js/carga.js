window.addEventListener("load", function() {
    var spinnerElement = document.querySelector(".custom-spinner");
    var customContent = document.getElementById("custom-content");
  
    setTimeout(function() {
      spinnerElement.classList.add("hidden");
      customContent.style.visibility = "visible";
      customContent.style.opacity = 1;
    }, 1000); // Cambia este valor al tiempo de carga que desees en milisegundos
  });
  