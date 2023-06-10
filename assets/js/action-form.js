//boton 1

var boton = document.getElementById("mostrar-formulario");
        var formulario = document.getElementById("formulario");
        
        boton.addEventListener("click", function() {
          boton.disabled = true; // Desactivar el botón durante la carga
          boton.innerText = "Cargando..."; // Cambiar el texto del botón
        
          // Simular carga de contenido con un retraso de 1 segundos
          setTimeout(function() {
            formulario.classList.add("mostrar");
            boton.style.display = "none"; // Ocultar el botón después de mostrar el formulario
          }, 1000);
        });
        
        formulario.addEventListener("click", function(event) {
          if (event.target === formulario) {
            formulario.classList.remove("mostrar");
            boton.style.display = "block"; // Volver a mostrar el botón al cerrar el formulario
            boton.disabled = false; // Habilitar el botón nuevamente
            boton.innerText = "Saber más"; // Restaurar el texto original del botón
          }
        });

//BOTON 2

var boton2 = document.getElementById("mostrar-formulario-2");
        var formulario2 = document.getElementById("formulario-2");
        
        boton2.addEventListener("click", function() {
          boton2.disabled = true;
          boton2.innerText = "Cargando...";
        
          
          setTimeout(function() {
            formulario2.classList.add("mostrar");
            boton2.style.display = "none";
          }, 1000);
        });
        
        formulario2.addEventListener("click", function(event) {
          if (event.target === formulario2) {
            formulario2.classList.remove("mostrar");
            boton2.style.display = "block";
            boton2.disabled = false;
            boton2.innerText = "Saber más";
          }
        });


//BOTON 3
var boton3 = document.getElementById("mostrar-formulario-3");
var formulario3 = document.getElementById("formulario-3");

boton3.addEventListener("click", function() {
  boton3.disabled = true; // Desactivar el botón durante la carga
  boton3.innerText = "Cargando..."; // Cambiar el texto del botón

  // Simular carga de contenido con un retraso de 1 segundo
  setTimeout(function() {
    formulario3.classList.add("mostrar");
    boton3.style.display = "none"; // Ocultar el botón después de mostrar el formulario
  }, 1000);
});

formulario3.addEventListener("click", function(event) {
  if (event.target === formulario3) {
    formulario3.classList.remove("mostrar");
    boton3.style.display = "block"; // Volver a mostrar el botón al cerrar el formulario
    boton3.disabled = false; // Habilitar el botón nuevamente
    boton3.innerText = "Saber más"; // Restaurar el texto original del botón
  }
});


//BOTON 4
var boton4 = document.getElementById("mostrar-formulario-4");
var formulario4 = document.getElementById("formulario-4");

boton4.addEventListener("click", function() {
  boton4.disabled = true; // Desactivar el botón durante la carga
  boton4.innerText = "Cargando..."; // Cambiar el texto del botón

  // Simular carga de contenido con un retraso de 1 segundo
  setTimeout(function() {
    formulario4.classList.add("mostrar");
    boton4.style.display = "none"; // Ocultar el botón después de mostrar el formulario
  }, 1000);
});

formulario4.addEventListener("click", function(event) {
  if (event.target === formulario4) {
    formulario4.classList.remove("mostrar");
    boton4.style.display = "block"; // Volver a mostrar el botón al cerrar el formulario
    boton4.disabled = false; // Habilitar el botón nuevamente
    boton4.innerText = "Saber más"; // Restaurar el texto original del botón
  }
});


//BOTON 5
var boton5 = document.getElementById("mostrar-formulario-5");
var formulario5 = document.getElementById("formulario-5");

boton5.addEventListener("click", function() {
  boton5.disabled = true; // Desactivar el botón durante la carga
  boton5.innerText = "Cargando..."; // Cambiar el texto del botón

  // Simular carga de contenido con un retraso de 1 segundo
  setTimeout(function() {
    formulario5.classList.add("mostrar");
    boton5.style.display = "none"; // Ocultar el botón después de mostrar el formulario
  }, 1000);
});

formulario5.addEventListener("click", function(event) {
  if (event.target === formulario5) {
    formulario5.classList.remove("mostrar");
    boton5.style.display = "block"; // Volver a mostrar el botón al cerrar el formulario
    boton5.disabled = false; // Habilitar el botón nuevamente
    boton5.innerText = "Saber más"; // Restaurar el texto original del botón
  }
});

//BOTON 6
var boton6 = document.getElementById("mostrar-formulario-6");
var formulario6 = document.getElementById("formulario-6");

boton6.addEventListener("click", function() {
  boton6.disabled = true; // Desactivar el botón durante la carga
  boton6.innerText = "Cargando..."; // Cambiar el texto del botón

  // Simular carga de contenido con un retraso de 1 segundo
  setTimeout(function() {
    formulario6.classList.add("mostrar");
    boton6.style.display = "none"; // Ocultar el botón después de mostrar el formulario
  }, 1000);
});

formulario6.addEventListener("click", function(event) {
  if (event.target === formulario6) {
    formulario6.classList.remove("mostrar");
    boton6.style.display = "block"; // Volver a mostrar el botón al cerrar el formulario
    boton6.disabled = false; // Habilitar el botón nuevamente
    boton6.innerText = "Saber más"; // Restaurar el texto original del botón
  }
});


//BOTON 7
var boton7 = document.getElementById("mostrar-formulario-7");
var formulario7 = document.getElementById("formulario-7");

boton7.addEventListener("click", function() {
  boton7.disabled = true; // Desactivar el botón durante la carga
  boton7.innerText = "Cargando..."; // Cambiar el texto del botón

  // Simular carga de contenido con un retraso de 1 segundo
  setTimeout(function() {
    formulario7.classList.add("mostrar");
    boton7.style.display = "none"; // Ocultar el botón después de mostrar el formulario
  }, 1000);
});

formulario7.addEventListener("click", function(event) {
  if (event.target === formulario7) {
    formulario7.classList.remove("mostrar");
    boton7.style.display = "block"; // Volver a mostrar el botón al cerrar el formulario
    boton7.disabled = false; // Habilitar el botón nuevamente
    boton7.innerText = "Saber más"; // Restaurar el texto original del botón
  }
});
