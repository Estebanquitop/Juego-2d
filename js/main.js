var velocidadX = 0;
var velocidadY = 0;
var posicionX = 0;
var posicionY = 600;
var gravedad = 0.5;
var salto = -10;
var enSuelo = false; // Nueva variable para indicar si el personaje está en el suelo

$(document).keydown(function(tecla) {
    if (tecla.keyCode == 39) {
        velocidadX = 5;
    }
    if (tecla.keyCode == 37) {
        velocidadX = -5;
    }
    if (tecla.keyCode == 38 && enSuelo) { // Verificar si el personaje está en el suelo antes de saltar
        if (tecla.shiftKey) {
            velocidadX = 5;
            velocidadY = salto;
        } else if (tecla.altKey) {
            velocidadX = -5;
            velocidadY = salto;
        } else {
            velocidadY = salto;
        }
        enSuelo = false; // Indicar que el personaje ya no está en el suelo
    }
});

$(document).keyup(function(tecla) {
    if (tecla.keyCode == 39 || tecla.keyCode == 37) {
        velocidadX = 0;
    }
});

setInterval(function() {
    velocidadY += gravedad;
    posicionX += velocidadX;
    posicionY += velocidadY;
  
    if (posicionY > 600) {
        posicionY = 600;
        velocidadY = 0;
        enSuelo = true; // Indicar que el personaje está de vuelta en el suelo cuando aterriza
    }
    if (posicionX < 0) {
        posicionX = 0;
    }
    if (posicionX > 1200) {
        posicionX = 1200;
    }
  
    $('.personaje').css({left: posicionX, top: posicionY});
}, 20);

$('.avion').animate({left: -201}, 3000, function() {
    $(this).css({left: 1280}); // Restablecer la posición del avión fuera de la pantalla a la derecha después de que termine la animación
});

setInterval(function() {
    $('.avion').animate({left: -101}, 3000, function() {
        $(this).css({left: 1280}); // Restablecer la posición del avión fuera de la pantalla a la derecha después de que termine la animación
    });
}, 5000); // Llama a la función cada 5 segundos (5000 milisegundos)



