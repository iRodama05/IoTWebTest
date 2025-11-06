/*
  Guardamos los elementos principales en variables para
  no tener que buscarlos cada vez. Es una buena práctica.
*/
const imagenPersonaje = document.getElementById("personaje");
const fondoPagina = document.body; // 'document.body' selecciona la etiqueta <body>

/**
 * Función para activar el poder del Hongo
 */
function usarHongo() {
    // 1. Cambiamos el atributo 'src' (source) de la imagen principal
    imagenPersonaje.src = "img/mario-hongo.png";
    
    // 2. Cambiamos el estilo 'backgroundColor' del body
    fondoPagina.style.backgroundColor = "#E53935"; // Tono rojo
}

/**
 * Función para activar el poder de la Flor de Fuego
 */
function usarFlor() {
    imagenPersonaje.src = "img/mario-fuego.png";
    fondoPagina.style.backgroundColor = "#FB8C00"; // Tono naranja
}

/**
 * Función para activar el poder de la Estrella
 */
function usarEstrella() {
    imagenPersonaje.src = "img/mario-estrella.png";
    fondoPagina.style.backgroundColor = "#FDD835"; // Tono amarillo
}

/**
 * Función para activar el poder de la Hoja Tanooki
 */
function usarHoja() {
    imagenPersonaje.src = "img/mario-tanooki.png";
    fondoPagina.style.backgroundColor = "#8D6E63"; // Tono café
}